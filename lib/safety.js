const Test = require("./test");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 399;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  let x = 171;
  let y = 0;
  let mx = 0;
  let my = 1;

  function draw() {
    ctx.clearRect(0,0,399,500);
    ctx.beginPath();
    ctx.arc(x,y,5,-(Math.PI/180)*1,(Math.PI/180)*1,true);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(171,0);
    ctx.lineTo(171,501);
    ctx.strokeStyle = "blue";
    ctx.closePath();
    ctx.stroke();

    x += mx;
    y += my;
  }

  setInterval(draw,1);

});
