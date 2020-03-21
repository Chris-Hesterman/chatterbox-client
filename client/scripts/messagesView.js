var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    setTimeout(function() {
      MessagesView.renderMessage();
    }, 1000);
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

  renderMessage: function () {
    let html = '';
    let newMessagesArray = Messages.results;
    if (App.roomname !== 'default room') {
      newMessagesArray = this.filterMessages();
    }
    for (let post of newMessagesArray) {
      // console.log(Messages);
      html += MessageView.render({ message: post });
      // console.log(html);
    }

    App.stopSpinner();
    $('#chats').append(html);
  }

};