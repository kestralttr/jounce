const Lines = require("./lines");
const NoteMaster = require("./notemaster");

class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.note1X = 171;
    this.note1Y = 0;
    this.note1MovY = 5;
    this.noteCounter = 0;
    this.note2X = 171;
    this.note2Y = 0;
    this.note2MovY = 5;
    this.globalColor = "#18CAE6";
    this.xCoords = [114,171,228,285];
  }

  update() {

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

    //sprite layer 1
    this.ctx.beginPath();
    this.ctx.arc(114,450,15,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
    this.ctx.lineTo(114-4,450);
    this.ctx.lineTo(114+4,450);
    this.ctx.closePath();
    this.ctx.globalAlpha = 1;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    //sprite layer 2
    this.ctx.beginPath();
    this.ctx.arc(114,450,17,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
    this.ctx.lineTo(114-4,450);
    this.ctx.lineTo(114+4,450);
    this.ctx.closePath();
    this.ctx.globalAlpha = 0.2;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    //sprite layer 3
    this.ctx.beginPath();
    this.ctx.arc(114,450,13,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
    this.ctx.lineTo(114-4,450);
    this.ctx.lineTo(114+4,450);
    this.ctx.closePath();
    this.ctx.globalAlpha = 0.2;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    //note speed incrementer
    if (this.noteCounter % 1000 === 0) {
      this.note1MovY = this.note1MovY+0.6;
      this.note2MovY = this.note2MovY+0.6;
    }

    //line creator
    const lines = new Lines(this.ctx,this.globalColor);
    lines.drawLines();

    // note counter
    this.noteCounter ++;
    // console.log(this.noteCounter);

    //note 1 methods
    if (this.note1Y > 500) {
      this.note1Y = 0;
      this.note1X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
    }
    const note1 = new NoteMaster.Note1(this.ctx,this.note1X,this.note1Y,this.note1MovY,this.globalColor);
    note1.drawNote();
    this.note1Y += this.note1MovY;

    //note 2 methods
    if (this.note2Y > 500) {
      this.note2Y = 0;
      this.note2X = this.xCoords[Math.floor(Math.random()*this.xCoords.length)];
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
