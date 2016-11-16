

class Matte {

  constructor(ctx,matteY,matteMovY) {
    this.ctx = ctx;
    this.matteY = matteY;
    this.matteMovY = matteMovY;
  }

  drawMatte() {
    let matte = new Image();
    matte.src = "lib/tron_background1.png";
    this.ctx.globalAlpha = 0.3;
    this.ctx.drawImage(matte,0,this.matteY);
  }
}

module.exports = Matte;
