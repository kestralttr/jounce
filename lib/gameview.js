

class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = 171;
    this.y = 0;
    this.mx = 0;
    this.my = 2;
  }

  update() {
    
  }

  draw() {

    if (this.y > 500) {
      this.y = 0;
    }

    this.ctx.clearRect(0,0,399,500);
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(114,0);
    this.ctx.lineTo(114,501);
    this.ctx.strokeStyle = "blue";
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(171,0);
    this.ctx.lineTo(171,501);
    this.ctx.strokeStyle = "blue";
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(228,0);
    this.ctx.lineTo(228,501);
    this.ctx.strokeStyle = "blue";
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(285,0);
    this.ctx.lineTo(285,501);
    this.ctx.strokeStyle = "blue";
    this.ctx.closePath();
    this.ctx.stroke();

    this.x += this.mx;
    this.y += this.my;

    requestAnimationFrame(this.draw.bind(this));

  }


}

module.exports = GameView;
