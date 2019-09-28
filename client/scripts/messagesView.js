const MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

    return;
  },

  renderMessage: function(message) {

 this.$chats.prepend(MessageView.render({
   username: message.username,
   text: message.text,
   roomname: message.roomname
 }));
  }
};

window.MessagesView = MessagesView;
