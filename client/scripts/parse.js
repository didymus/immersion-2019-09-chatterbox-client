const Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // TODO: Save a message to the server
  },

  readAll: function(successCB, errorCB = null) {
    // TODO: Get messages from server
  },

};

window.Parse = Parse;
