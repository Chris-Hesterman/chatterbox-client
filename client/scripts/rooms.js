var Rooms = {

  $button: $('.addroom'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
  },

  add: function () {
    var html = '';
    var newRoom = window.prompt('Enter a room name');
    App.roomname = newRoom;
    RoomsView.renderRoom(newRoom);
  }
};