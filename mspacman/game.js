function init () {

var my_img = new Image();
my_img.src = "pacman10-hp-sprite.png";

my_img.onload = function() {
  canvas = document.getElementById('game_canvas');
  ctx = canvas.getContext('2d');

  //Ms. Pac Man Drawing
  ctx.drawImage(my_img, 81, 23, 19, 20, 0, 80, 19, 20);
};

}






