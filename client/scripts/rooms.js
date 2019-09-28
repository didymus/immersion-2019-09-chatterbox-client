const Rooms = {
    const Rooms = {
        
        _data: new Set,
        selected: 'lobby',

        items: function () {
            return _.chain([...Rooms._data]);
        },

        isSelected: function (roomname) {
            return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
        },

        add: function (room, callback = () => { }) {
            Rooms._data.add(room);
            Rooms.selected = room;
            callback(Rooms.items());
        },


};

window.Rooms = Rooms;
