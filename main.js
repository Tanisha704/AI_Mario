function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
}

function draw() {
	game()
}

.instruction_image{
	display:inline-block;
	width=45%;
}




