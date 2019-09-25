// These DOM elements must be loaded before any of `client/scripts` are run
$(document.body).prepend(`
  <div id="main">
    <h1>chatterbox</h1>
    <div class="spinner"><img src="client/images/spiffygif_46x46.gif"></div>
    <div id="rooms">
      Room:
      <select></select>
      <button>Add Room</button>
    </div>
    <form action="#" id="send" method="post">
      <input type="text" name="message" id="message" />
      <input type="submit" name="submit" class="submit" />
    </form>
  </div>
  <div id="chats"></div>
`);

window.CAMPUS = 'opspark';
