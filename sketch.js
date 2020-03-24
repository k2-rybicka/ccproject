let flute;
let harp;
let kick;
let laser;
let metal;
let paper;
let reverb;
let spring;
let whistle;
let whoosh;

function preload() {
	flute = loadSound("flute.wav");
	harp = loadSound("harp.wav");
	kick = loadSound("kick.wav");
	laser = loadSound("laser.wav");
	metal = loadSound("metal.wav");
	paper = loadSound("paper.wav");
	reverb = loadSound("reverb.wav");
	spring = loadSound("spring.wav");
	whistle = loadSound("whistle.wav");
	whoosh = loadSound("whoosh.wav");
}

function setup() {
  createCanvas(800,600);
  background(139,153,179);
}

function draw() {
	fill(0);
 	noStroke();
	fill(random(200,255),random(100,255),random(120,255),random(20,80));
}

function keyTyped() {
	if (key === '1') {
		one(random(0,800),random(0,600),random(5,30));
		flute.play();
	} else if (key === '2') {
		two(random(0,800),random(0,600),random(5,30));
		harp.play();
	} else if (key === '3') {
		three(random(0,800),random(0,600),random(5,30));
		kick.play();
	} else if (key === '4') {
		four(random(0,800),random(0,600),random(5,30));
		laser.play();
	} else if (key === '5') {
		five(random(0,800),random(0,600),random(5,30));
		metal.play();
	} else if (key === '6') {
		six(random(0,800),random(0,600),random(5,30));
		paper.play();
	} else if (key === '7') {
		seven(random(0,800),random(0,600),random(5,30))
		reverb.play();
	} else if (key === '8') {
		eight(random(0,800),random(0,600),random(5,30))
		spring.play();
	} else if (key === '9') {
		nine(random(0,800),random(0,600),random(5,30))
		whistle.play();
	} else if (key === '0') {
		zero(random(0,800),random(0,600),random(5,30))
		whoosh.play();
	}
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		background(51,19,179);
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
		star(random(0,800),random(0,600),random(4,16));
	} else if (keyCode === LEFT_ARROW) {
		background(135,235,255);
		noStroke();
		fill(255,215,82);
		//triangle(0,0,100,0,0,100);
		circle(0,0,150);
		fill(255,255,255,40);
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
		cloud(random(0,800),random(0,600),random(40,200));
	}
}

function one(x,y,z) {
	fill(255,161,200);
	noStroke();
	quad(x,y,x+z,y,x+z,y+4*z,x,y+4*z);
}

function two(x,y,z) {
	fill(255,146,44);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x+z*3,y+z,x+z*4,y+z,x+z*4,y+z*4,x+z*3,y+z*4);
	quad(x,y+3*z,x+3*z,y+3*z,x+3*z,y+4*z,x,y+4*z);
	quad(x,y+4*z,x+z,y+4*z,x+z,y+7*z,x,y+7*z);
	quad(x+z,y+6*z,x+4*z,y+6*z,x+4*z,y+7*z,x+z,y+7*z);
}

function three(x,y,z) {
	fill(247,205,255);
	noStroke();
	quad(x,y,x+3*z,y,x+3*z,y+z,x,y+z);
	quad(x+3*z,y,x+4*z,y,x+4*z,y+7*z,x+3*z,y+7*z);
	quad(x,y+3*z,x+3*z,y+3*z,x+3*z,y+4*z,x,y+4*z);
	quad(x,y+6*z,x+3*z,y+6*z,x+3*z,y+7*z,x,y+7*z);	
}

function four(x,y,z) {
	fill(192,255,191);
	noStroke();
	quad(x,y,x+z,y,x+z,y+4*z,x,y+4*z);
	quad(x+z,y+3*z,x+z,y+4*z,x+4*z,y+4*z,x+4*z,y+3*z);
	quad(x+3*z,y+4*z,x+4*z,y+4*z,x+4*z,y+7*z,x+3*z,y+7*z);
}

function five(x,y,z) {
	fill(235,92,52);
	noStroke();
	quad(x,y,x+z,y,x+z,y+4*z,x,y+4*z);
	quad(x+z,y,x+4*z,y,x+4*z,y+z,x+z,y+z);
	quad(x+z,y+3*z,x+4*z,y+3*z,x+4*z,y+4*z,x+z,y+4*z);
	quad(x+3*z,y+4*z,x+4*z,y+4*z,x+4*z,y+7*z,x+3*z,y+7*z);
	quad(x,y+6*z,x+3*z,y+6*z,x+3*z,y+7*z,x,y+7*z);
}

function six(x,y,z) {
	fill(255,160,156);
	noStroke();
	quad(x,y,x+z,y,x+z,y+5*z,x,y+5*z);
	quad(x+z,y+2*z,x+4*z,y+2*z,x+4*z,y+3*z,x+z,y+3*z);
	quad(x+z,y+4*z,x+4*z,y+4*z,x+4*z,y+5*z,x+z,y+5*z);
	quad(x+3*z,y+3*z,x+4*z,y+3*z,x+4*z,y+4*z,x+3*z,y+4*z);
}

function seven(x,y,z) {
	fill(193,161,235);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+4*z,x+3*z,y+4*z);
	quad(x+2*z,y+2*z,x+3*z,y+2*z,x+3*z,y+3*z,x+2*z,y+3*z);
}

function eight(x,y,z) {
	fill(177,255,142);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x,y+4*z,x+4*z,y+4*z,x+4*z,y+5*z,x,y+5*z);
	quad(x,y+z,x+z,y+z,x+z,y+4*z,x,y+4*z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+4*z,x+3*z,y+4*z);
	quad(x+z,y+2*z,x+3*z,y+2*z,x+3*z,y+3*z,x+z,y+3*z);
}

function nine(x,y,z) {
	fill(106,214,240);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+5*z,x+3*z,y+5*z);
	quad(x,y+z,x+z,y+z,x+z,y+3*z,x,y+3*z);
	quad(x+z,y+2*z,x+3*z,y+2*z,x+3*z,y+3*z,x+z,y+3*z);
}

function zero(x,y,z) {
	fill(166,98,77);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x,y+4*z,x+4*z,y+4*z,x+4*z,y+5*z,x,y+5*z);
	quad(x,y+z,x+z,y+z,x+z,y+4*z,x,y+4*z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+4*z,x+3*z,y+4*z);
}

function star(x,y,z) {
	stroke(255,248,186);
	strokeWeight(2);
	line(x,y,x+2*z,y);
	line(x+z,y-z,x+z,y+z);
}

function cloud(x,y,z) {
	noStroke();
	circle(x,y,z);
	circle(x-z/2,y,z-z/2);
	circle(x+z/2,y,z-z/4);
}