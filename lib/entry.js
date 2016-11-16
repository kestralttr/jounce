const Test = require("./test");
const GameView = require("./gameview");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 399;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  const gameView = new GameView(ctx);

  const audioClip = document.getElementById("audioEl");
  audioClip.play();

  const playPauseButton = document.getElementById("toggle_play");

  function aud_play_pause() {
    if (audioClip.paused) {
      audioClip.play();
    } else {
      audioClip.pause();
    }
  }

  playPauseButton.addEventListener("click",aud_play_pause);

  let isPaused = false;

  function keyTracker(e) {
    if (e.keyCode === 37 && isPaused === false) {
      gameView.moveLeft();
    }
    if (e.keyCode === 39 && isPaused === false) {
      gameView.moveRight();
    }
    if (e.keyCode === 32 && isPaused === false) {
      gameView.startCapture();
    }
    if (e.keyCode === 80) {
      if (isPaused === false) {
        isPaused = true;
        audioClip.pause();
      } else {
        isPaused = false;
        audioClip.play();
      }
    }
  }

  document.addEventListener('keydown', keyTracker);

  const FPS = 60;
  setInterval(function() {
    if (isPaused === false) {
      gameView.update();
      gameView.draw();
    }
  }, 1000/FPS);

});
