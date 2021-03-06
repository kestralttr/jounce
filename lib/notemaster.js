

class Note1 {

  constructor(ctx,x,y,movY,color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.movY = movY;
    this.color = color;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 1;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,7,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.5;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,9,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.2;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,11,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.1;
    this.ctx.fill();
    this.ctx.closePath();
  }

}

class Note2 {

  constructor(ctx,x,y,movY,color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.movY = movY;
    this.color = color;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 1;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,7,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.5;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,9,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.2;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,11,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.1;
    this.ctx.fill();
    this.ctx.closePath();
  }

}

module.exports = {
  Note1,
  Note2
};
