var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= _.escape(decodeURI(arguments[0].username)) %></div>
        <div class="post"><%= _.escape(decodeURI(arguments[0].text)) %></div>
      </div>
    `)
};