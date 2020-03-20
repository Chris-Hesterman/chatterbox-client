var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    setTimeout(function() {
      MessagesView.renderMessage();
    }, 1000);
    // MessagesView.render();

  },

  renderMessage: function () {
    let html = '';
    for (let post of Messages.results) {
      // console.log(Messages);
      html += MessageView.render({ message: post });
      // console.log(html);
    }

    App.stopSpinner();
    $('#chats').append(html);
  }

};