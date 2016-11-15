

class Sprite {

  constructor(ctx,x,y,color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  drawSprite() {

    //sprite layer 1
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,15,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
    this.ctx.lineTo(this.x-4,this.y);
    this.ctx.lineTo(this.x+4,this.y);
    this.ctx.closePath();
    this.ctx.strokeStyle = this.color;
    this.ctx.globalAlpha = 1;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    //sprite layer 2
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,17,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
    this.ctx.lineTo(this.x-4,this.y);
    this.ctx.lineTo(this.x+4,this.y);
    this.ctx.closePath();
    this.ctx.strokeStyle = this.color;
    this.ctx.globalAlpha = 0.2;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    //sprite layer 3
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,13,-(Math.PI/180)*75,-(Math.PI/180)*105,false);
    this.ctx.lineTo(this.x-4,this.y);
    this.ctx.lineTo(this.x+4,this.y);
    this.ctx.closePath();
    this.ctx.strokeStyle = this.color;
    this.ctx.globalAlpha = 0.2;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

  }

}

module.exports = Sprite;
