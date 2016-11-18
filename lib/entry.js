const Test = require("./test");
const GameView = require("./gameview");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 399;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  const gameView = new GameView(canvasEl,ctx);

  const audioClip = document.getElementById("audioEl");
  audioClip.volume = 0.4;
  const blip = document.getElementById("blip");
  blip.playbackRate = 2;
  const explosion = document.getElementById("game_over");
  const startSound = document.getElementById("select");
  const hurt = document.getElementById("hurt");


  const playPauseButton = document.getElementById("toggle_mute");

  let muted = false;

  function aud_play_pause() {
    if (muted === false) {
      $("audio").prop('muted', true);
      muted = true;
    } else {
      $("audio").prop('muted', false);
      muted = false;
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
        startSound.play();
        audioClip.play();
        $("#instructions").removeClass("instructions");
        $("#instructions").addClass("disappear");
        $("#retry").removeClass("instructions");
        $("#retry").addClass("disappear");

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

  function initialBackground() {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(399,0);
    ctx.lineTo(399,500);
    ctx.lineTo(0,500);
    ctx.lineTo(0,0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#050D10";
    ctx.fill();
  }

  initialBackground();



  // gameView.update();
  // gameView.draw();

  function runGame() {
    const FPS = 60;
    const ticker = setInterval(function() {
      if (gameView.noteSound === true && gameView.noteSoundPlayed === false) {
        blip.play();
        gameView.noteSoundPlayed === true;
      }

      if (gameView.addStrike === true) {
        hurt.play();
        gameView.addStrike = false;
      }

      if (gameView.gameOver && godMode === false) {
        clearInterval(ticker);
        audioClip.pause();
        explosion.play();
        audioClip.currentTime = 0;
        isStarted = false;
        $("#retry").removeClass("disappear");
        $("#score").html(`Your score: ${gameView.score}`);
        $("#retry").addClass("instructions");

      }
      if (isPaused === false) {
        gameView.update();
        gameView.draw();
      }
    }, 1000/FPS);
  }

});
