const Lines = require("./lines");

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
