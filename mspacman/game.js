function init () {

var my_img = new Image();
img.src = "pacman10-hp-sprite.png";

img.onload = function() {
  canvas = document.getElementById('game_canvas');
  ctx = canvas.getContext('2d');

  ctx.drawImage(img, 15, 3, 3, 3, 0, 0, 3, 3);
};

}






