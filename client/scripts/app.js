const App = {
$spinner: $('.spinner img'),
username: 'anonymous',

  initialize: function(){
    App.username = window.location.search.substr(10);
    //Friends.initialize();
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // get new messages every 3 sec
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = () => {}){
    Parse.readAll((data) => {
    // examine the response from the server request:
    //console.log(data);
      if(!data.results || !data.results.length) { return; }
        Rooms.update(data.results, RoomsView.render);
        Messages.update(data.results, MessagesView.render);
        callback();
    });
  },

  startSpinner: function(){
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function(){
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
};

window.App = App;
