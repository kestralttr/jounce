const Test = require("./test");
const GameView = require("./gameview");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 399;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  const gameView = new GameView(ctx);
  // gameView.update();
  // gameView.draw();

  function keyTracker(e) {
    if (e.keyCode === 37) {
      gameView.moveLeft();
    }
    if (e.keyCode === 39) {
      gameView.moveRight();
    }
    if (e.keyCode === 32) {
      gameView.startCapture();
    }
  }

  document.addEventListener('keydown', keyTracker);

  const FPS = 60;
  setInterval(function() {
    gameView.update();
    gameView.draw();
  }, 1000/FPS);

});
