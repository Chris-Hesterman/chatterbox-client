var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomname: 'default room',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Rooms.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => { }) {
    Messages = {};
    $('#chats').empty();
    Parse.readAll((data) => {
      Object.assign(Messages, data);
      callback();
    });
  },

  refresh: function() {
    App.startSpinner();
    App.fetch(MessagesView.initialize());

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
