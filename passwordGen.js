
    
    
function randomPasswordGenerator() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < possible.length - 45; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
}
  return text;
}

console.log(randomPasswordGenerator());
//

//
Math.random().toString(36).substr(2, 5); //password generator   
Math.random().toString(36).substring(2); //password generator   
    
 

