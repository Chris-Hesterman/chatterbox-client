var RoomsView = {
  $refreshbutton: $('.refresh'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$refreshbutton.on('click', function () {
      App.refresh();
    });
    this.$select.change((event) => {
      console.log(event);
      MessagesView.renderMessage();
    });
  },

  updateSelector: function() {
    var html = '';
    let newRoom = App.roomname;
    html += RoomView.render({ room: newRoom });
    console.log(html);
    this.$select.append(html);
    this.chooseRoom();
  },

  chooseRoom: function() {

  },

  render: function () {
    MessagesView.renderMessage();
  },

};


