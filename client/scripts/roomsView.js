var RoomsView = {
  $refreshbutton: $('.refresh'),
  $select: $('select'),

  initialize: function() {
    this.$refreshbutton.on('click', function () {
      App.refresh();
    });
    this.$select.change((event) => {
      App.roomname = event.target.value;
      App.refresh();
    });
  },

  updateSelector: function() {
    var html = '';
    let newRoom = App.roomname;
    html += RoomView.render({ room: newRoom });
    console.log(html);
    this.$select.append(html);
    App.refresh();
  },

  render: function () {
    MessagesView.renderMessage();
  },

};


