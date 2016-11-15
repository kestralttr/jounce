

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
