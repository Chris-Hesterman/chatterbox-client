var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    setTimeout(function() {
      MessagesView.renderMessage(Messages.results);
    }, 2000);
    // MessagesView.render();

  },

  filterMessages: function () {
    var roomMessages = Messages.results.filter((message) => {
      if (message.roomname === App.roomname) {
        return message;
      }
    });

    return roomMessages;
  },

  renderMessage: function (messages) {
    let html = '';

    if (App.roomname !== 'default room') {
      messages = this.filterMessages();
    }

    for (let post of messages) {
      // console.log(Messages);
      html += MessageView.render({ message: post });
      // console.log(html);
    }

    App.stopSpinner();
    $('#chats').append(html);
  }

};