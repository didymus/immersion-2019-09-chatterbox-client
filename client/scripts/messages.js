const Messages = {
_data: {},

items: function (){
return _.chain(Object.values(Messages._data)).sortBy('createdAt');
},

add: function (message, callback = () => { }){
Messages._data[message.objectId] = message;
callback(Messages.items());
},

update: function (messages, callback = () => { }){
const length = Object.keys(Messages._data).length;
for (let message of messages){
Messages._data[message.objectId] = Messages._conform(message);
}
// invoke callback if changed
if(Object.keys(Messages._data).length !== length){
callback(Messages.items());
}
},

_conform: function (message){
//console.log(message);
message.text = message.text || '';
message.username = message.username || '';
message.roomname = message.roomname || '';
return message;
},
};

window.Messages = Messages;
