function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//just to test for the output
console.log(isMobileDevice());

if(isMobileDevice() == true){
  mobile = true;
    ctx.clearRect(0,0,canv.width,canv.height);
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText("Sorry. Your device seems to be incompatible.", 0, 400, canv.width);
}
