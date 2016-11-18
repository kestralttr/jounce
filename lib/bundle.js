/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Test = __webpack_require__(1);
	const GameView = __webpack_require__(2);
	
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
	
	  function mute() {
	    if (muted === false) {
	      $("audio").prop('muted', true);
	      muted = true;
	    } else {
	      $("audio").prop('muted', false);
	      muted = false;
	    }
	  }
	
	  playPauseButton.addEventListener("click",mute);
	
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
	      if (isStarted === false) {
	        isStarted = true;
	        gameView.reset();
	        // if (muted === false) {
	        //   $("audio").prop('muted', false);
	        // } else {
	        //   $("audio").prop('muted', true);
	        // }
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
	      } else if (isPaused === true) {
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


/***/ },
/* 1 */
/***/ function(module, exports) {



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Lines = __webpack_require__(3);
	const NoteMaster = __webpack_require__(4);
	const Sprite = __webpack_require__(5);
	const Background = __webpack_require__(6);
	const Matte = __webpack_require__(7);
	
	class GameView {
	
	  constructor(canvas,ctx) {
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.gameOver = false;
	    this.matteY = -1100;
	    this.matteMovY = 2;
	    this.note1X = 114;
	    this.note1Y = 0;
	    this.note1MovY = 5;
	    this.note1Caught = false;
	    this.noteCounter = 0;
	    this.note2X = 114;
	    this.note2Y = 0;
	    this.note2MovY = 5;
	    this.note2Caught = false;
	    this.noteSound = false;
	    this.noteSoundPlayed = false;
	    this.spriteXCoords = [114,171,228,285];
	    this.spriteXIdx = 0;
	    this.spriteY = 450;
	    this.score = 0;
	    this.strikes = 0;
	    this.addStrike = false;
	    this.globalColor = "#18CAE6";
	    this.xCoords = [114,171,228,285];
	
	  }
	
	  moveLeft() {
	    if (this.spriteXIdx > 0) {
	      this.spriteXIdx -= 1;
	    }
	  }
	
	  moveRight() {
	    if (this.spriteXIdx < 3) {
	      this.spriteXIdx += 1;
	    }
	  }
	
	  startCapture() {
	
	  }
	
	  // gameOver() {
	  //   if (this.gameOver) {
	  //     return true;
	  //   } else {
	  //     return false;
	  //   }
	  // }
	  //
	  // noteSound() {
	  //   if (this.noteSound) {
	  //     return true;
	  //   } else {
	  //     return false;
	  //   }
	  // }
	  //
	  // noteSoundPlayed() {
	  //
	  // }
	
	  update() {
	
	    if (this.strikes >= 4) {
	      this.gameOver = true;
	    }
	
	    if (this.note1Y > 430 && this.note1Y < 470 &&
	      this.note1Caught === false &&
	      this.spriteXCoords[this.spriteXIdx] === this.note1X) {
	
	      this.note1Caught = true;
	      this.noteSound = true;
	      this.score ++;
	    }
	
	    if (this.note2Y > 430 && this.note2Y < 470 &&
	      this.note2Caught === false &&
	      this.spriteXCoords[this.spriteXIdx] === this.note2X) {
	
	      this.note2Caught = true;
	      this.noteSound = true;
	      this.score ++;
	    }
	
	    // console.log(this.score);
	
	    if (this.note1Y > 470 && this.note1Caught === false) {
	      this.strikes ++;
	      this.addStrike = true;
	      this.note1Caught = true;
	    }
	    if (this.note2Y > 470 && this.note2Caught === false) {
	      this.strikes ++;
	      this.addStrike = true;
	      this.note2Caught = true;
	    }
	
	  }
	
	  draw() {
	    this.ctx.clearRect(0,0,399,500);
	
	    const background = new Background(this.ctx);
	    background.drawBackground();
	
	    if (this.matteY >= -300) {
	      this.matteY = -1100;
	    }
	    const matteObj = new Matte(this.ctx,this.matteY,this.matteMovY);
	    matteObj.drawMatte();
	    this.matteY += this.matteMovY;
	
	    // this.ctx.globalAlpha = 1;
	    // this.ctx.font = "26px sans";
	    // this.ctx.fillStyle = "#18CAE6";
	    // this.ctx.strokeStyle = "#18CAE6";
	    // this.ctx.fillText("Score",30,30);
	    // this.ctx.fillText(`${this.score}`,50,70);
	    //
	    // this.ctx.font = "26px sans";
	    // this.ctx.fillStyle = "#18CAE6";
	    // this.ctx.strokeStyle = "#18CAE6";
	    // this.ctx.fillText("Score",30,30);
	    // this.ctx.fillText(`${this.score}`,50,70);
	
	
	    switch(this.strikes) {
	      case 0:
	        this.globalColor = "#18CAE6";
	        break;
	      case 1:
	        this.globalColor = "#ffdd21";
	        break;
	      case 2:
	        this.globalColor = "#ef611a";
	        break;
	      default:
	        this.globalColor = "#e81414";
	    }
	    // if (this.strikes >= 1) {
	    //   // console.log("strikes hit");
	    //   this.globalColor = "#f2dd21";
	    // }
	
	
	    //create sprite object
	    const sprite = new Sprite(this.ctx,this.spriteXCoords[this.spriteXIdx],this.spriteY,this.globalColor);
	    //create lines
	    const lines = new Lines(this.ctx,this.globalColor);
	
	
	    //draw sprite object
	    sprite.drawSprite();
	    //draw lines
	    lines.drawLines();
	
	    //speed incrementer
	    if (this.noteCounter % 1000 === 0) {
	      this.note1MovY = this.note1MovY+0.6;
	      this.note2MovY = this.note2MovY+0.6;
	      this.matteMovY = this.matteMovY+0.3;
	    }
	
	    // note counter
	    this.noteCounter ++;
	    console.log(this.noteCounter);
	
	    //note 1 methods
	    if (this.note1Y > 500) {
	      this.note1Y = 0;
	      this.note1X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
	      this.note1Caught = false;
	      this.noteSound = false;
	      this.noteSoundPlayed = false;
	    }
	    const note1 = new NoteMaster.Note1(this.ctx,this.note1X,this.note1Y,this.note1MovY,this.globalColor);
	    note1.drawNote();
	    this.note1Y += this.note1MovY;
	
	    //note 2 methods
	    if (this.note2Y > 500) {
	      this.note2Y = 0;
	      this.note2X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
	      this.note2Caught = false;
	      this.noteSound = false;
	      this.noteSoundPlayed = false;
	    }
	    if (this.noteCounter > 48) {
	      const note2 = new NoteMaster.Note2(this.ctx,this.note2X,this.note2Y,this.note2MovY,this.globalColor);
	      note2.drawNote();
	      this.note2Y += this.note2MovY;
	    }
	
	    // this.ctx.globalAlpha = 0.1;
	    //
	    // var w = this.ctx.canvas.width,
	    //     h = this.ctx.canvas.height,
	    //     idata = this.ctx.createImageData(w, h),
	    //     buffer32 = new Uint32Array(idata.data.buffer),
	    //     len = buffer32.length,
	    //     i = 0;
	    //
	    // for(; i < len;)
	    //     buffer32[i++] = ((255 * Math.random())|0) << 24;
	    //
	    // this.ctx.putImageData(idata, 0, 0);
	
	
	
	    // requestAnimationFrame(this.draw.bind(this));
	  }
	
	
	  reset() {
	    this.gameOver = false;
	    this.matteY = -1100;
	    this.matteMovY = 2;
	    this.note1X = 114;
	    this.note1Y = 0;
	    this.note1MovY = 5;
	    this.note1Caught = false;
	    this.noteCounter = 0;
	    this.note2X = 114;
	    this.note2Y = 0;
	    this.note2MovY = 5;
	    this.note2Caught = false;
	    this.noteSound = false;
	    this.noteSoundPlayed = false;
	    this.spriteXCoords = [114,171,228,285];
	    this.spriteXIdx = 0;
	    this.spriteY = 450;
	    this.score = 0;
	    this.strikes = 0;
	    this.globalColor = "#18CAE6";
	    this.xCoords = [114,171,228,285];
	  }
	
	
	}
	
	module.exports = GameView;


/***/ },
/* 3 */
/***/ function(module, exports) {

	
	
	class Lines {
	
	  constructor(ctx,color) {
	    this.ctx = ctx;
	    this.color = color;
	  }
	
	  changeColor(color) {
	    this.color = color;
	  }
	
	  drawLines() {
	
	    //Line 1
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 2;
	    this.ctx.globalAlpha = 1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(114,0);
	    this.ctx.lineTo(114,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 4;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.beginPath();
	    this.ctx.moveTo(114,0);
	    this.ctx.lineTo(114,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 8;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(114,0);
	    this.ctx.lineTo(114,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    //Line 2
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 2;
	    this.ctx.globalAlpha = 1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(171,0);
	    this.ctx.lineTo(171,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 4;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.beginPath();
	    this.ctx.moveTo(171,0);
	    this.ctx.lineTo(171,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 8;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(171,0);
	    this.ctx.lineTo(171,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    //Line3
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 2;
	    this.ctx.globalAlpha = 1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(228,0);
	    this.ctx.lineTo(228,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 4;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.beginPath();
	    this.ctx.moveTo(228,0);
	    this.ctx.lineTo(228,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 8;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(228,0);
	    this.ctx.lineTo(228,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    //Line 4
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 2;
	    this.ctx.globalAlpha = 1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(285,0);
	    this.ctx.lineTo(285,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 4;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.beginPath();
	    this.ctx.moveTo(285,0);
	    this.ctx.lineTo(285,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 8;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(285,0);
	    this.ctx.lineTo(285,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    //Border Left
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 20;
	    this.ctx.globalAlpha = 1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(0,0);
	    this.ctx.lineTo(0,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 23;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.beginPath();
	    this.ctx.moveTo(0,0);
	    this.ctx.lineTo(0,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 26;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(0,0);
	    this.ctx.lineTo(0,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    //Border Right
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 20;
	    this.ctx.globalAlpha = 1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(399,0);
	    this.ctx.lineTo(399,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 23;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.beginPath();
	    this.ctx.moveTo(399,0);
	    this.ctx.lineTo(399,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 26;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(399,0);
	    this.ctx.lineTo(399,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	
	    //EXPERIMENTAL ATMOSPHERE MOTE!!!
	    // this.ctx.beginPath();
	    // this.ctx.arc(200,200,4,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    // this.ctx.fillStyle = this.color;
	    // this.ctx.globalAlpha = 0.05;
	    // this.ctx.fill();
	    // this.ctx.closePath();
	    //
	    // this.ctx.beginPath();
	    // this.ctx.arc(200,200,3,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    // this.ctx.fillStyle = this.color;
	    // this.ctx.globalAlpha = 0.05;
	    // this.ctx.fill();
	    // this.ctx.closePath();
	    //
	    // this.ctx.beginPath();
	    // this.ctx.arc(200,200,2,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    // this.ctx.fillStyle = this.color;
	    // this.ctx.globalAlpha = 0.05;
	    // this.ctx.fill();
	    // this.ctx.closePath();
	
	  }
	
	}
	
	module.exports = Lines;


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	
	class Note1 {
	
	  constructor(ctx,x,y,movY,color) {
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.movY = movY;
	    this.color = color;
	  }
	
	  drawNote() {
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 1;
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,7,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,9,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 0.2;
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,11,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.fill();
	    this.ctx.closePath();
	  }
	
	}
	
	class Note2 {
	
	  constructor(ctx,x,y,movY,color) {
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.movY = movY;
	    this.color = color;
	  }
	
	  drawNote() {
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 1;
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,7,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,9,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 0.2;
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,11,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.fill();
	    this.ctx.closePath();
	  }
	
	}
	
	module.exports = {
	  Note1,
	  Note2
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	
	
	class Sprite {
	
	  constructor(ctx,x,y,color) {
	    this.ctx = ctx;
	    this.x = x;
	    this.y = y;
	    this.color = color;
	  }
	
	  drawSprite() {
	
	    //sprite layer 1
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,15,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.lineTo(this.x-4,this.y);
	    this.ctx.lineTo(this.x+4,this.y);
	    this.ctx.closePath();
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	
	    //sprite layer 2
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,17,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.lineTo(this.x-4,this.y);
	    this.ctx.lineTo(this.x+4,this.y);
	    this.ctx.closePath();
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.2;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	
	    //sprite layer 3
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,13,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.lineTo(this.x-4,this.y);
	    this.ctx.lineTo(this.x+4,this.y);
	    this.ctx.closePath();
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.2;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	
	    //sprite trail 1 layer 1
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+3,15,-(Math.PI/180)*0,-(Math.PI/180)*180,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.5;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	    //sprite trail 1 layer 2
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+3,17,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	    //sprite trail 1 layer 3
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+3,13,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	
	    //sprite trail 2 layer 1
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+5,15,-(Math.PI/180)*0,-(Math.PI/180)*180,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.3;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	    //sprite trail 2 layer 2
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+5,17,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	    //sprite trail 2 layer 3
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+5,13,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	
	    //sprite trail 3 layer 1
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+7,15,-(Math.PI/180)*0,-(Math.PI/180)*180,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.2;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	    //sprite trail 3 layer 2
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+7,17,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	    //sprite trail 3 layer 3
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y+7,13,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.lineWidth = 2;
	    this.ctx.stroke();
	
	  }
	
	}
	
	module.exports = Sprite;


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	
	class Background {
	
	  constructor(ctx) {
	    this.ctx = ctx;
	  }
	
	  drawBackground() {
	    this.ctx.beginPath();
	    this.ctx.moveTo(0,0);
	    this.ctx.lineTo(399,0);
	    this.ctx.lineTo(399,500);
	    this.ctx.lineTo(0,500);
	    this.ctx.lineTo(0,0);
	    this.ctx.globalAlpha = 1;
	    this.ctx.fillStyle = "#050D10";
	    this.ctx.fill();
	  }
	
	}
	
	module.exports = Background;


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	
	class Matte {
	
	  constructor(ctx,matteY,matteMovY) {
	    this.ctx = ctx;
	    this.matteY = matteY;
	    this.matteMovY = matteMovY;
	  }
	
	  drawMatte() {
	    let matte = new Image();
	    matte.src = "lib/tron_background1.png";
	    this.ctx.globalAlpha = 0.3;
	    this.ctx.drawImage(matte,0,this.matteY);
	  }
	}
	
	module.exports = Matte;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map