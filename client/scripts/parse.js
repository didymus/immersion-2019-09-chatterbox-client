const Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`, 

  create: function(message, successCB, errorCB = null) {
    // TODO: Save a message to the server
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: (data) => {
        //console.log('chatterbox: Message sent');
        successCB;
      },
      error: (data) => {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        //console.error('chatterbox: Failed to send message', data);
        errorCB;
      },
    });
  },

  readAll: function(successCB, errorCB = null) {
    // TODO: Get messages from server
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: Parse.server,
      type: 'GET',
      dataType: 'json',
      success: successCB,
      error: errorCB
    });
  },

};

window.Parse = Parse;
