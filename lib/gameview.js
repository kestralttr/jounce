const Lines = require("./lines");
const NoteMaster = require("./notemaster");

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
