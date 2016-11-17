const Test = require("./test");
const GameView = require("./gameview");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 399;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  const gameView = new GameView(ctx);

  const audioClip = document.getElementById("audioEl");


  const playPauseButton = document.getElementById("toggle_mute");

  function aud_play_pause() {
    if (audioClip.paused) {
      audioClip.play();
    } else {
      audioClip.pause();
    }
  }

  playPauseButton.addEventListener("click",aud_play_pause);

  let isPaused = false;
  let godMode = false;
  let isStarted = false;

  function keyTracker(e) {
    if (e.keyCode === 37 && isPaused === false) {
      gameView.moveLeft();
    }
    if (e.keyCode === 39 && isPaused === false) {
      gameView.moveRight();
    }
    if (e.keyCode === 32 && isPaused === false) {
      // gameView.startCapture();
      if (isStarted === false) {
        isStarted = true;
        gameView.reset();
        audioClip.play();
        runGame();
      }
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
    if (e.keyCode === 71) {
      godMode = true;
    }
  }

  document.addEventListener('keydown', keyTracker);

  // function runGame() {
  //   if (isPaused === false) {
  //     gameView.update();
  //     gameView.draw();
  //   }
  // }

  gameView.update();
  gameView.draw();

  function runGame() {
    const FPS = 60;
    const ticker = setInterval(function() {
      if (gameView.gameOver && godMode === false) {
        clearInterval(ticker);
        audioClip.pause();
        audioClip.currentTime = 0;
        isStarted = false;
      }
      if (isPaused === false) {
        gameView.update();
        gameView.draw();
      }
    }, 1000/FPS);
  }

});
