var RoomsView = {
  $refreshbutton: $('.refresh'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$refreshbutton.on('click', function () {
      App.refresh();
    });
  },

  render: function() {
  }

};
