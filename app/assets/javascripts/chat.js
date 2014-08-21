$(function() {
  var socket;
  //var host = location.origin.replace(/^http/, 'ws')
  socket = new WebSocket("ws://" + window.location.host + "/chat/chat");
 // socket = new WebSocket(host);
   //socket = new WebSocket("ws://" + window.location.host + "/chat/chat")
    
  socket.onmessage = function(event) {
    if (event.data.length) {
      return $("#output").append("" + event.data + "<br>");
    }
  };
    
  return $("body").on("submit", "form.chat", function(event) {
    var $input;
    event.preventDefault();
    $input = $(this).find("input");
    socket.send($input.val());
    return $input.val(null);
  });
    
});