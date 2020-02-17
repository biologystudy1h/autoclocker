window.onload = function load() {
  var canv = document.getElementById("program");
  var ctx = canv.getContext("2d");
  var img = document.getElementById("centerLogo");
  ctx.drawImage(img, 548, 155.5);
}

var menu = {
  x: 10,
  y: 585,
  w: 30,
  h: 30,
  open: false
}
var rect = {
 x: 10,
  y: 585.5,
  w: 30,
  h: 30
}
var power = {
  x: 5,
  y: 5,
  w: 30,
  h: 30
}

var mouse = {
  x: 10,
  y: 20
}


var canv = document.getElementById("program");
var ctx = canv.getContext("2d");


var canvSize = {
  h: canv.height,
  w: canv.width
}
var windowSize = {
  h: window.innerHeight,
  w: window.innerWidth
}
if(windowSize.h < canvSize.h || windowSize.w < canvSize.w){
  alert("This device is incompatible");
  close();
  console.log("window closed");
} //just close
function drawTaskbar() {
ctx.beginPath();
ctx.fillStyle = 'rgba(199, 199, 199, 0.7)';
ctx.fillRect(-5, 580, 1374, 580);
ctx.stroke();
}
drawTaskbar();

function drawMenuTaskbrButton(){
  ctx.fillStyle = 'rgba(0, 66, 173, 1)';
  ctx.fillRect(menu.x, menu.y, menu.w, menu.h);
}

function powerButton() {
  ctx.fillStyle = "red";
  ctx.fillRect(5, 5, 30, 30);
}

function menuTaskbr() {
  if(menu.open == false){
    menu.open = true;
    ctx.fillStyle = 'rgba(201, 201, 201 ,1)';
    ctx.fillRect(5, menu.y-310, 200, 300);
    ctx.strokeStyle = 'rgba(150, 150, 150, 1)';
    ctx.lineWidth = 4;
    ctx.strokeRect(5, menu.y-310, 200, 300);
  }else{
    menu.open = false;
    ctx.clearRect(0, menu.y-313, 210, 305);
  }
}
function getMousePos(canv, event) {
  var rect = canv.getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.w && pos.y < rect.y+rect.h && pos.y > rect.y
}
addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
canv.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canv, evt);

    if (isInside(mousePos,rect)) {
        menuTaskbr();
    }
}, false);
canv.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canv, evt);

    if (isInside(mousePos,power)) {
        var sd = confirm("Shut Down?");
        if(sd == true){
        close();
        console.log("window closed");
    }} // closes on power off
}, false);
canv.addEventListener('mousemove',function(evt){
  var mousePos = getMousePos(canv, evt);

    if (isInside(mousePos,rect)) {
     ctx.fillStyle = 'rgba(0, 60, 255, 1)';
    ctx.fillRect(menu.x, menu.y, menu.w, menu.h);
    }else if(!isInside(mousePos,rect)){
    ctx.fillStyle = 'rgba(0, 66, 173, 1)';
    ctx.fillRect(menu.x, menu.y, menu.w, menu.h);
    }
    if (isInside(mousePos,power)) {
     ctx.fillStyle = 'crimson';
    ctx.fillRect(5, 5, 30, 30);
    }else if(!isInside(mousePos,power)){
    ctx.fillStyle = 'red';
    ctx.fillRect(5, 5, 30, 30);
    }
});
powerButton();
drawMenuTaskbrButton();

