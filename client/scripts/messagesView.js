var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    console.log(window);
    window.App.fetch().done(function(data) {
      console.log(data);
    });
  },

  render: function() {
  }

};