var n = 0;
var del = false;
n = items.length-1;
addEventListener('keydown', function(e){
  if(list){
  if(items.length == 0){
      items.push('');
      n++;
    }
  if(e.which == 8){
    del = false;
    e.key = '';
    if(items[n] == ""){
      del = true;
    items.splice(n,1);
    n--;
    listPage();
  }
  if(!del){
    items[n] = items[n].substring(0, items[n].length-1);
    listPage();
  }}

if(e.key == "Enter"){
    e.key = '';
    items.push('');
    n++;
    listPage();
  }
  if(e.key == "Meta" || e.key == "Backspace" || e.key == "Enter" || e.key == "Shift" || e.key == "Control" || e.key == "Tab" || e.key == "Alt" || e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == "ArrowLeft" || e.key == 'ArrowRight' || e.key == "Escape" || e.key == "BrowserForward" || e.key == "BrowserBack" || e.key == "BrowserRefresh"){
    e.key = '';
  }else{
    items[n] += e.key;
    listPage();
  }
}});
