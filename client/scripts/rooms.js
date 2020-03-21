var Rooms = {

  $button: $('#rooms button'),

  initialize: function() {
    this.$button.on('click', function () {
      Rooms.add();
    });
  },

  add: function () {
    var html = '';
    var newRoom = window.prompt('Enter a room name');
    App.roomname = newRoom;
    RoomsView.updateSelector();
  }
};