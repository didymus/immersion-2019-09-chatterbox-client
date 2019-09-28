const MessagesView = {

  $chats: $('#chats'),

  initialize: function(){
 MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function(){
  MessagesView.$chats.html('');
  Messages
  .items()
  .filter(message => Rooms.isSelected(message.roomname))
  .each(message => MessagesView.renderMessage(message));
  
  },

  renderMessage: function(message){
 const $message = MessageView.render(message);
 MessagesView.$chats.prepend($message);
  },

  handleClick: function(event){
    
 const username = $(event.target).data('username');
 if(username === undefined){ return; }
 Friends.toggleStatus(username, MessagesView.render);
 },
};

window.MessagesView = MessagesView;
