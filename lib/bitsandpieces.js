if (this.strikes > 1) {
  console.log("strikes hit");
  this.ctx.font = "26px sans";
  this.fillStyle = "blue";
  this.ctx.fillText("Test", 200, 200);
} else {
  this.ctx.font = "26px sans";
  this.fillStyle = "yellow";
  this.ctx.fillText("Test", 200, 200);
}

this.ctx.fillStyle = "#FFCCoo";
