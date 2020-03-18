var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    Parse.readAll((name) => {
      Object.assign(Messages, name);
      console.log('Messages', Messages);
      MessagesView.render();
    });
  },

  render: function () {
    let html = '';

    for (let message of Messages.results) {
      html += MessageView.render(message);
    }
    $('#chats').append(html);
  }

};