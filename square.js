//target fromes per second
const FPS = 60;
var speed = 0.2;
var x = 1;
var y = 1;
var xDir = 1;
var yDir = 1;
var timer_c = false;
var timer = 0;

var image = new Image();
image.src = "green.png";
var canvas = null;
var context2D = null;

window.onload = init;

function init()
{
	canvas = document.getElementById('canvas');
	context2D = canvas.getContext('2d');
//	refreshScores();
	setInterval(draw, 1000/FPS);
}

function draw()
{
	document.onkeydown = function(event){keystroke(event)}
	movement();
	context2D.clearRect(0, 0, canvas.width, canvas.height);
	//context2D.fillStyle = '#333';
	//context2D.fillRect(0,0, 16, 16);
	context2D.fillStyle = '#0f0';
	context2D.fillRect(x-1, y-1, 2, 2);
	renderContextToFavicon(context2D);
	if (timer_c == true)
		timer++;
	//if (timer % 60 == 1) speed += 1;
}

function keystroke(event)
{
	if (event.keyCode == 37) { //left
		xDir = -1;
		timer_c = true;
	}
	if (event.keyCode == 39) { //right
		xDir = 1;
		timer_c = true;
	}
	if (event.keyCode == 38) { //up
		yDir = -1;
		timer_c = true;
	}
	if (event.keyCode == 40) { //down
		yDir = 1;
		timer_c = true;
	}
}

function movement()
{	
	x += speed * xDir;
	y += speed * yDir;
	//Canvas edge
	if (x > canvas.width)
		reset();
	if (x < 0)
		reset();
	if (y > canvas.height)
		reset();
	if (y < 0)
		reset();
}

function reset()
{
	if(timer != 0) {
		alert("score: " + timer.toString());
	}
	x = 1;
	y = 1;
	xDir = 1;
	yDir = 1;
	speed = 0.3;
	timer = 0;
	timer_c = false;
}