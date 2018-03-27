
    
    
function randomPasswordGenerator() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < possible.length - 45; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
}
  return text;
}
//testing still
console.log(randomPasswordGenerator());

