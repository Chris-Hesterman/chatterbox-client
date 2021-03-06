var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    setTimeout(function() {
      MessagesView.renderMessage(Messages.results);
    }, 2000);
  },

  filterMessages: function() {
    var roomMessages = Messages.results.filter((message) => {
      if (message.roomname === App.roomname) {
        return message;
      }
    });

    return roomMessages;
  },

  renderMessage: function(messages) {
    let html = '';

    if (App.roomname !== 'default room') {
      messages = this.filterMessages();
    }

    for (let post of messages) {
      html += MessageView.render({ message: post });
    }

    App.stopSpinner();
    $('#chats').append(html);
  }
};
