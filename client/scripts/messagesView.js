var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

    setTimeout(function() {
      MessagesView.render();
    }, 1000);
    // MessagesView.render();

  },

  render: function () {
    let html = '';
    for (let post of Messages.results) {
      html += MessageView.render({ message: post });
      console.log(html);
    }

    App.stopSpinner();
    $('#chats').append(html);
  }

};