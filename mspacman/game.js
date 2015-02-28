function init () {

var my_img = new Image();
my_img.src = "pacman10-hp-sprite.png";

my_img.onload = function() {
  canvas = document.getElementById('game_canvas');
  ctx = canvas.getContext('2d');
  //Draw Ms. Pacman
  ctx.drawImage(my_img, 320, 0, 464, 137, 0, 0, 464, 137);

  //Draw Blue Board
  ctx.drawImage(my_img, 81, 23, 19, 20, 0, 0, 19, 20);

};

}






