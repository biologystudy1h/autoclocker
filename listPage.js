var items = ['RemindMe v1.0', 'This is a program that will allow you to keep a list of anything you please'];
var num = 0;

var z = localStorage.getItem('number');
for(i=0;i<z;i++){
  items[i] = localStorage.getItem(i);
}
if(items[0] != 'RemindMe v1.0'){
  if(items[1] == 'undefined' || items[1] == null || items[1] == ''){
    items.splice(1, 1);
  }
  }


function listPage() {
  home = false;
  list = true;
  ctx.clearRect(0, 0, canv.width, canv.height);
  drawScreen();
  drawNavbar(canv.width, 60);
  navbarList(true);
  navbarHome(false);
  thelist();
  logo();
}

function thelist() {
  if(list){

  ctx.clearRect(0, 0, canv.width, canv.height);
  drawScreen();
  drawNavbar(canv.width, 60);
  navbarList(true);
  navbarHome(false);
  
  var doty = 120;
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(30, doty, 5, 0, Math.PI * 2);
  ctx.fill();
  for(i = 0; i < items.length; i++) {
    ctx.beginPath();
    ctx.arc(30, doty, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '18px Arial';
    ctx.fillText(items[num],45,doty+5);
    doty += 50;
    localStorage.setItem(num, items[num]);
    localStorage.setItem('number', items.length);
    num++;
  }
  num=0;
}}
