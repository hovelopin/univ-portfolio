var canvas,context;

function init(){
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");

  context.lineWidth = 2;
  context.strokeStyle = "black";

  canvas.addEventListener("mousemove",function (e) {move(e)},false);
  canvas.addEventListener("mousedown",function (e) {down(e)},false);
  canvas.addEventListener("mouseup",function (e) {up(e)},false);
  canvas.addEventListener("mouseout",function (e) {out(e)},false);
}

var startX=0,startY=0;
var dragging=false;

function draw(curX,curY){
  context.beginPath();
  context.moveTo(startX,startY);
  context.lineTo(curX,curY);
  context.stroke();
}
// 마우스가 눌릴때
function down(e){
  startX=e.offsetX; 
  startY=e.offsetY; 
  dragging=true;
}
// 마우스가 놓여질 때
function up(e){
  dragging = false;
}
// 마우스가 움직일 때
function move(e){
  if(!dragging) return; //마우스가 눌러지지 않았을때 
  var curX= e.offsetX;
  var curY = e.offsetY;
  draw(curX,curY);
  startX=curX;
  startY=curY;

}
// 마우스가 캔버스에 벗어날 때
function out(e){
  dragging=false;
}
// 색이 변경될때

function colorChange(color){

  if (color == 'black') {
    context.strokeStyle = color;
  }
  else if (color == 'white') {
    context.strokeStyle = color;
  }
  else if (color == 'red') {
    context.strokeStyle = color;
  }
  else if (color == 'orange') {
    context.strokeStyle = color;
  }
  else if (color == 'yellow') {
    context.strokeStyle = color;
  }
  else if (color == 'darkblue') {
    context.strokeStyle = color;
  }
  else if (color == 'skyblue') {
    context.strokeStyle = color;
  }
  else if (color == 'mediumaquamarine') {
    context.strokeStyle = color;
  }
  else if (color == 'blue') {
    context.strokeStyle = color;
  }
  else {
    context.strokeStyle = color;
  }
}

function paintClear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function upSize(e) {
  context.lineWidth = e;
}


