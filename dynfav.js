
function getFaviconContext() {
	var canvas = document.createElement('canvas');
	canvas.setAttribute( 'style', 'visibility:hidden');
	if (canvas.getContext) {
		canvas.height = canvas.width = 16; // set the size
		ctx = canvas.getContext('2d');
		return ctx;
		//ctx.canvas.setAttribute( 'style', 'visibility:hidden');
	}
	return null;
}
function clearContext(cxt) {
  cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
}
function renderContextToFavicon(ctx) {
	icon=document.getElementById('favicon');
	(newIcon = icon.cloneNode(true)).setAttribute('href',ctx.canvas.toDataURL());
	icon.parentNode.replaceChild(newIcon,icon);
}

/*
SNIPPETS:

var	icon=$('favicon');
(newIcon = icon.cloneNode(true)).setAttribute('href',ctx.canvas.toDataURL());
icon.parentNode.replaceChild(newIcon,icon);
ctx	= $('render').getContext('2d');
function toggleIconUse(){
	useIcon=!useIcon;
	ctx.canvas.setAttribute( 'style', 'visibility:'+ (useIcon?'hidden':'visible') );
	if( !useIcon )
	{
		document.getElementById('favicon').setAttribute('href','favicon.png');
	}
}
(function () {
var canvas = document.createElement('canvas'),
    ctx,
    img = document.createElement('img'),
    link = document.getElementById('favicon').cloneNode(true),
    day = (new Date).getDate() + '';

if (canvas.getContext) {
  canvas.height = canvas.width = 16; // set the size
  ctx = canvas.getContext('2d');
  img.onload = function () { // once the image has loaded
    ctx.drawImage(this, 0, 0);
    ctx.font = 'bold 10px "helvetica", sans-serif';
    ctx.fillStyle = '#F0EEDD';
    if (day.length == 1) day = '0' + day;
    ctx.fillText(day, 2, 12);
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
  };
  img.src = 'ical-icon.png';
}

})();*/