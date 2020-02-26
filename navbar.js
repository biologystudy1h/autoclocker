var nav;
var listx = 38;
var listy = 38;

var listbtn = {
  x: 38,
  y: 18,
  w: 57,
  h: 25
};

var homebtn = {
  x: 118,
  y: 18,
  w: 100,
  h: 25
};

function drawNavbar(w, h) {
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, w, h);
  nav = h;
}

function navbarList(page) {
  if (page) {
    ctx.fillStyle = 'rgba(0,0,215,1)';
    ctx.fillRect(29, 10, 67, 36);
  }
  ctx.fillStyle = 'white';
  ctx.font = '32px Arial';
  ctx.fillText('List', 38, 38);
}

function navbarHome(page) {
  if(page){
    ctx.fillStyle = 'rgba(0,0,215,1)';
    ctx.fillRect(109, 10, 100, 36);
  }
  ctx.fillStyle = 'white';
  ctx.font = '32px Arial';
  ctx.fillText('Home', 118, 38);
}
