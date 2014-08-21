$(function() {
  var socket;
  //var host = location.origin.replace(/^http/, 'ws')
  socket = new WebSocket("ws://" + window.location.host + "/plays/player_chat");
 // socket = new WebSocket(host);
   //socket = new WebSocket("ws://" + window.location.host + "/chat/chat")
    
  socket.onmessage = function(event) {
    if (event.data.length) {
      return $("#play").append("" + event.data + "<br>");
    }
  };
    
  return $("body").on("submit", "form.player", function(event) {
    var $input;
    event.preventDefault();
    $input = $(this).find("input");
    socket.send($input.val());
    return $input.val(null);
  });
    
});