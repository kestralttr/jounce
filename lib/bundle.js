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
	
	class GameView {
	
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.x = 171;
	    this.y = 0;
	    this.mx = 0;
	    this.my = 8;
	  }
	
	  update() {
	
	  }
	
	  draw() {
	    this.ctx.clearRect(0,0,399,500);
	
	    const lines = new Lines(this.ctx);
	    lines.drawLines();
	
	    if (this.y > 500) {
	      this.y = 0;
	    }
	
	    this.ctx.beginPath();
	    this.ctx.arc(this.x,this.y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
	    this.ctx.fillStyle = "blue";
	    this.ctx.fill();
	    this.ctx.closePath();
	
	    this.x += this.mx;
	    this.y += this.my;
	
	    requestAnimationFrame(this.draw.bind(this));
	
	  }
	
	
	}
	
	module.exports = GameView;


/***/ },
/* 3 */
/***/ function(module, exports) {

	
	
	class Lines {
	
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.color = "blue";
	  }
	
	  changeLineColor(color) {
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map