var RoomsView = {
  $refreshbutton: $('.refresh'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$refreshbutton.on('click', function () {
      App.refresh();
    });
    this.$button.on('click', function () {
      RoomsView.createRooms();
    });
  },

  render: function() {
  },

  createRooms: function () {
    var html = '';
    var newRoom = window.prompt('Enter a room name');
    html += RoomsView.render({ room: newRoom});
    this.$select.append(html);
    console.log($select);
  }

};
