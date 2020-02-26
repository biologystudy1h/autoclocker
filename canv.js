var mobile = false;
window.onload = function () {
  var img = document.getElementById('img');
}
var canv = document.getElementById('program');
var ctx = canv.getContext('2d');
var home = true;
var list = false;


window.onscroll = function () { window.scrollTo(0, 0); };

document.getElementById('program').width = window.innerWidth - 3.2;
document.getElementById('program').height = window.innerHeight - 20;
var cw = canv.width;
var ch = canv.height;
console.log(canv.width);

function drawScreen() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, cw, ch);
}

homePage();

addEventListener('resize', function () {
  document.getElementById('program').width = window.innerWidth - 3.2;
  document.getElementById('program').height = window.innerHeight - 20;
  cw = canv.width;
  ch = canv.height;
  if(mobile == true){
    ctx.clearRect(0,0,canv.width,canv.height);
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText("Sorry. Your device seems to be incompatible.", 0, 400, canv.width);
  }
  if(mobile == false){
  drawScreen();
  drawNavbar(canv.width, 60);
  if (home) {
    navbarList(false);
    navbarHome(true);
    homePage();
  } else if (list) {
    navbarList(true);
    navbarHome(false);
    listPage();
  }
}});
