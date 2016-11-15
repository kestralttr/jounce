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
	  gameView.update();
	  // gameView.draw();
	
	});


/***/ },
/* 1 */
/***/ function(module, exports) {



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Lines = __webpack_require__(3);
	const NoteMaster = __webpack_require__(4);
	
	class GameView {
	
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.note1X = 171;
	    this.note1Y = 0;
	    this.note1MovY = 1;
	    this.noteCounter = 0;
	    this.note2X = 171;
	    this.note2Y = 0;
	    this.note2MovY = 1;
	    this.globalColor = "blue";
	    this.xCoords = [114,171,228,285];
	  }
	
	  update() {
	
	  }
	
	  draw() {
	    this.ctx.clearRect(0,0,399,500);
	
	    if (this.noteCounter % 2000 === 0) {
	      this.note1MovY = this.note1MovY+0.6;
	      this.note2MovY = this.note2MovY+0.6;
	    }
	
	    const lines = new Lines(this.ctx,this.globalColor);
	    lines.drawLines();
	
	    if (this.note1Y > 500) {
	      this.note1Y = 0;
	      this.note1X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
	    }
	    this.noteCounter ++;
	    console.log(this.noteCounter);
	    this.note1Y += this.note1MovY;
	
	    const note1 = new NoteMaster.Note1(this.ctx,this.note1X,this.note1Y,this.note1MovY,this.globalColor);
	    note1.drawNote();
	
	    if (this.note2Y > 500) {
	      this.note2Y = 0;
	      this.note2X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
	    }
	    this.noteCounter ++;
	    console.log(this.noteCounter);
	
	
	    if (this.noteCounter > 350) {
	      const note2 = new NoteMaster.Note2(this.ctx,this.note2X,this.note2Y,this.note2MovY,this.globalColor);
	      note2.drawNote();
	      this.note2Y += this.note2MovY;
	    }
	
	    requestAnimationFrame(this.draw.bind(this));
	
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
	
	  drawLines() {
	    this.ctx.beginPath();
	    this.ctx.moveTo(114,0);
	    this.ctx.lineTo(114,501);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.beginPath();
	    this.ctx.moveTo(171,0);
	    this.ctx.lineTo(171,501);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.beginPath();
	    this.ctx.moveTo(228,0);
	    this.ctx.lineTo(228,501);
	    this.ctx.strokeStyle = this.color;
	    this.ctx.closePath();
	    this.ctx.stroke();
	
	    this.ctx.beginPath();
	    this.ctx.moveTo(285,0);
	    this.ctx.lineTo(285,501);
	    this.ctx.strokeStyle = this.color;
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
	    this.ctx.fill();
	    this.ctx.closePath();
	  }
	
	}
	
	module.exports = {
	  Note1,
	  Note2
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map