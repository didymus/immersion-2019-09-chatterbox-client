const Rooms = {

_data: new Set,
selected: 'lobby',

    items: function(){
        return _.chain([...Rooms._data]);
    },

    isSelected: function(roomname){
        return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
    },

    add: function (room, callback = () => {}){
        Rooms._data.add(room);
        Rooms.selected = room;
        callback(Rooms.items());
    },

    update: function (messages, callback = () => {}){
        const length = Rooms._data.size;
        _.chain(messages)
        .pluck('roomname')
        .uniq()
        .each(room => Rooms._data.add(room));
            if(Rooms.selected === null){
                // first room is default
                Rooms.selected = Rooms._data.values().next().value;
            }
                if(Rooms._data.size !== length){
                    callback(Rooms.items());
                }
    },
};

window.Rooms = Rooms;
