function homePage() {
  home = true;
  list = false;
  ctx.clearRect(0, 0, canv.width, canv.height);
  drawScreen();
  drawNavbar(canv.width, 60);
  navbarList(false);
  navbarHome(true);
  welcomeMessage();
  logo();
}

function welcomeMessage() {
  ctx.fillStyle = 'black';
  ctx.font = '40px Arial';
  ctx.fillText("Welcome!",50, 125);
  ctx.font = '20px Arial';
  ctx.fillText("RemindMe is a great app to keep a list of groceries, parts, instructions, or whatever you feel like putting on a list!",5, 170, canv.width-10);
}

function logo() {
  if(canv.width > 825){
  ctx.save();
  ctx.translate(30, -50);
  ctx.rotate(8*Math.PI/180);
  ctx.drawImage(img, 510,-63, 300, 100);
  ctx.restore();
}else{
  ctx.clearRect(0, 0, canv.width, canv.height);
  drawScreen();
  drawNavbar(canv.width, 60);
  navbarList(false);
  navbarHome(true);
  welcomeMessage();
}
}
