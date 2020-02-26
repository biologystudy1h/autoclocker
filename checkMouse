function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function isInside(pos, rect) {
  return pos.x > rect.x && pos.x < rect.x + rect.w && pos.y < rect.y + rect.h && pos.y > rect.y;
}

canv.addEventListener('click', function (evt) {
  var mousePos = getMousePos(canv, evt);

  //console.log(mousePos);

  if (isInside(mousePos, listbtn)) {
    console.log('list clicked');
    listPage();
  }
  if (isInside(mousePos, homebtn)) {
    console.log('home clicked');
    homePage();
  }
});
