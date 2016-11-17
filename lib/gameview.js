const Lines = require("./lines");
const NoteMaster = require("./notemaster");
const Sprite = require("./sprite");
const Background = require("./background");
const Matte = require("./matte");

class GameView {

  constructor(ctx) {
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

  gameOver() {
    if (this.gameOver) {
      return true;
    } else {
      return false;
    }
  }

  update() {

    if (this.strikes >= 4) {
      this.gameOver = true;
    }

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
