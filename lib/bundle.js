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
	
	  const gameView = new GameView(ctx);
	  // gameView.update();
	  // gameView.draw();
	
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
	      } else {
	        isPaused = false;
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


/***/ },
/* 1 */
/***/ function(module, exports) {



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Lines = __webpack_require__(3);
	const NoteMaster = __webpack_require__(4);
	const Sprite = __webpack_require__(5);
	
	class GameView {
	
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.note1X = 171;
	    this.note1Y = 0;
	    this.note1MovY = 5;
	    this.note1Caught = false;
	    this.noteCounter = 0;
	    this.note2X = 171;
	    this.note2Y = 0;
	    this.note2MovY = 5;
	    this.note2Caught = false;
	    this.spriteXCoords = [114,171,228,285];
	    this.spriteXIdx = 0;
	    this.spriteY = 450;
	    this.score = 0;
	    this.strikes = 0;
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
	
	  update() {
	
	    if (this.note1Y > 430 && this.note1Y < 470 &&
	      this.note1Caught === false &&
	      this.spriteXCoords[this.spriteXIdx] === this.note1X) {
	
	      this.note1Caught = true;
	      this.score ++;
	    }
	
	    if (this.note2Y > 430 && this.note2Y < 470 &&
	      this.note2Caught === false &&
	      this.spriteXCoords[this.spriteXIdx] === this.note2X) {
	
	      this.note2Caught = true;
	      this.score ++;
	    }
	
	    // console.log(this.score);
	
	    if (this.note1Y > 470 && this.note1Caught === false) {
	      this.strikes ++;
	      this.note1Caught = true;
	    }
	    if (this.note2Y > 470 && this.note2Caught === false) {
	      this.strikes ++;
	      this.note2Caught = true;
	    }
	    // console.log("note1 strikes:", this.strikes);
	
	    if (this.strikes >= 1) {
	      // console.log("strikes hit");
	      this.globalColor = "#FFCCoo";
	    }
	    // console.log(this.globalColor);
	
	  }
	
	  draw() {
	    this.ctx.clearRect(0,0,399,500);
	
	    //background
	    this.ctx.beginPath();
	    this.ctx.moveTo(0,0);
	    this.ctx.lineTo(399,0);
	    this.ctx.lineTo(399,500);
	    this.ctx.lineTo(0,500);
	    this.ctx.lineTo(0,0);
	    this.ctx.globalAlpha = 1;
	    this.ctx.fillStyle = "#050D10";
	    this.ctx.fill();
	
	    this.ctx.font = "26px sans";
	    this.ctx.fillStyle = "#18CAE6";
	    this.ctx.strokeStyle = "#18CAE6";
	    this.ctx.fillText("Score",30,30);
	    this.ctx.fillText(`${this.score}`,50,70);
	
	    this.ctx.font = "26px sans";
	    this.ctx.fillStyle = "#18CAE6";
	    this.ctx.strokeStyle = "#18CAE6";
	    this.ctx.fillText("Score",30,30);
	    this.ctx.fillText(`${this.score}`,50,70);
	
	
	
	    //create sprite object
	    const sprite = new Sprite(this.ctx,this.spriteXCoords[this.spriteXIdx],this.spriteY,this.globalColor);
	    //create lines
	    const lines = new Lines(this.ctx,this.globalColor);
	
	
	    //draw sprite object
	    sprite.drawSprite();
	    //draw lines
	    lines.drawLines();
	
	    //note speed incrementer
	    if (this.noteCounter % 1000 === 0) {
	      this.note1MovY = this.note1MovY+0.6;
	      this.note2MovY = this.note2MovY+0.6;
	    }
	
	    // note counter
	    this.noteCounter ++;
	    // console.log(this.noteCounter);
	
	    //note 1 methods
	    if (this.note1Y > 500) {
	      this.note1Y = 0;
	      this.note1X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
	      this.note1Caught = false;
	    }
	    const note1 = new NoteMaster.Note1(this.ctx,this.note1X,this.note1Y,this.note1MovY,this.globalColor);
	    note1.drawNote();
	    this.note1Y += this.note1MovY;
	
	    //note 2 methods
	    if (this.note2Y > 500) {
	      this.note2Y = 0;
	      this.note2X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
	      this.note2Caught = false;
	    }
	    if (this.noteCounter > 48) {
	      const note2 = new NoteMaster.Note2(this.ctx,this.note2X,this.note2Y,this.note2MovY,this.globalColor);
	      note2.drawNote();
	      this.note2Y += this.note2MovY;
	    }
	
	    // requestAnimationFrame(this.draw.bind(this));
	
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
	
	    // this.ctx.beginPath();
	    // this.ctx.moveTo(114,0);
	    // this.ctx.lineTo(114,501);
	    // this.ctx.strokeStyle = this.color;
	    // this.ctx.closePath();
	    // this.ctx.lineWidth = 6;
	    // this.ctx.globalAlpha = 0.2;
	    // this.ctx.stroke();
	
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
	
	    // this.ctx.beginPath();
	    // this.ctx.moveTo(171,0);
	    // this.ctx.lineTo(171,501);
	    // this.ctx.strokeStyle = this.color;
	    // this.ctx.closePath();
	    // this.ctx.lineWidth = 6;
	    // this.ctx.globalAlpha = 0.2;
	    // this.ctx.stroke();
	
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
	
	    // this.ctx.beginPath();
	    // this.ctx.moveTo(228,0);
	    // this.ctx.lineTo(228,501);
	    // this.ctx.strokeStyle = this.color;
	    // this.ctx.closePath();
	    // this.ctx.lineWidth = 6;
	    // this.ctx.globalAlpha = 0.2;
	    // this.ctx.stroke();
	
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
	
	    // this.ctx.beginPath();
	    // this.ctx.moveTo(285,0);
	    // this.ctx.lineTo(285,501);
	    // this.ctx.strokeStyle = this.color;
	    // this.ctx.closePath();
	    // this.ctx.lineWidth = 6;
	    // this.ctx.globalAlpha = 0.2;
	    // this.ctx.stroke();
	
	    this.ctx.strokeStyle = this.color;
	    this.ctx.lineWidth = 8;
	    this.ctx.globalAlpha = 0.1;
	    this.ctx.beginPath();
	    this.ctx.moveTo(285,0);
	    this.ctx.lineTo(285,501);
	    this.ctx.closePath();
	    this.ctx.stroke();
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
	
	  }
	
	}
	
	module.exports = Sprite;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map