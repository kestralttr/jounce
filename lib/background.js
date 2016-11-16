

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
