

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

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 8;
    this.ctx.globalAlpha = 0.1;
    this.ctx.beginPath();
    this.ctx.moveTo(285,0);
    this.ctx.lineTo(285,501);
    this.ctx.closePath();
    this.ctx.stroke();

    //Border Left
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 20;
    this.ctx.globalAlpha = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(0,501);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 23;
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(0,501);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 26;
    this.ctx.globalAlpha = 0.1;
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(0,501);
    this.ctx.closePath();
    this.ctx.stroke();

    //Border Right
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 20;
    this.ctx.globalAlpha = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(399,0);
    this.ctx.lineTo(399,501);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 23;
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(399,0);
    this.ctx.lineTo(399,501);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 26;
    this.ctx.globalAlpha = 0.1;
    this.ctx.beginPath();
    this.ctx.moveTo(399,0);
    this.ctx.lineTo(399,501);
    this.ctx.closePath();
    this.ctx.stroke();


    //EXPERIMENTAL ATMOSPHERE MOTE!!!
    // this.ctx.beginPath();
    // this.ctx.arc(200,200,4,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    // this.ctx.fillStyle = this.color;
    // this.ctx.globalAlpha = 0.05;
    // this.ctx.fill();
    // this.ctx.closePath();
    //
    // this.ctx.beginPath();
    // this.ctx.arc(200,200,3,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    // this.ctx.fillStyle = this.color;
    // this.ctx.globalAlpha = 0.05;
    // this.ctx.fill();
    // this.ctx.closePath();
    //
    // this.ctx.beginPath();
    // this.ctx.arc(200,200,2,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    // this.ctx.fillStyle = this.color;
    // this.ctx.globalAlpha = 0.05;
    // this.ctx.fill();
    // this.ctx.closePath();

  }

}

module.exports = Lines;
