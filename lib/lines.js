

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
