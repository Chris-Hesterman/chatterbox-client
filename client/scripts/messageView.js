var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= App.username %></div>
        <div></div>
      </div>
    `)
};