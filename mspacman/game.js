function init () {
var img = new Image();
img.addEventListener("load", function()) {
//draw image
    var c = document.getElementById("game_canvas");
    var ctx = c.getContext("2d");
    ctx.drawImage(img,1200,1200);

}, false);
img.src = "pacman10-hp-sprite.png";





