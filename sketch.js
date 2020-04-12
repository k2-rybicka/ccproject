let flute;
let harp;
let lvl;
let laser;
let cat;
let paper;
let reverb;
let plum;
let whistle;
let bark;
let day;
let night; //setting the variables for all the sounds

let itter = 240;
let minSize = 2;
let maxSize = 6;
let minOpacity = 50;
let maxOpacity = 200; //setting the variables needed for drawing shapes

function preload() {
	flute = loadSound("flute.wav");
	harp = loadSound("harp.wav");
	lvl = loadSound("lvl.wav");
	laser = loadSound("laser.wav");
	cat = loadSound("cat.wav");
	paper = loadSound("paper.wav");
	reverb = loadSound("reverb.wav");
	plum = loadSound("plum.wav");
	whistle = loadSound("whistle.wav");
	bark = loadSound("bark.wav");
	day = loadSound("day.wav");
	night = loadSound("night.wav"); //preloading the sounds from file paths
}

function setup() {
  createCanvas(windowWidth,windowHeight/1.5);
  background(139,153,179); //canvas size and colour
}

function draw() {
}

function keyTyped() { 
	if (key === '1') {
		one(random(0,width),random(0,height),random(5,30));
		flute.play();
	} else if (key === '2') {
		two(random(0,width),random(0,height),random(5,30));
		harp.play();
	} else if (key === '3') {
		three(random(0,width),random(0,height),random(5,30));
		lvl.play();
	} else if (key === '4') {
		four(random(0,width),random(0,height),random(5,30));
		laser.play();
	} else if (key === '5') {
		five(random(0,width),random(0,height),random(5,30));
		cat.play();
	} else if (key === '6') {
		six(random(0,width),random(0,height),random(5,30));
		paper.play();
	} else if (key === '7') {
		seven(random(0,width),random(0,height),random(5,30))
		reverb.play();
	} else if (key === '8') {
		eight(random(0,width),random(0,height),random(5,30))
		plum.play();
	} else if (key === '9') {
		nine(random(0,width),random(0,height),random(5,30))
		whistle.play();
	} else if (key === '0') {
		zero(random(0,width),random(0,height),random(5,30))
		bark.play();
	}
} //functions triggering drawing particular shapes and playing sounds when number keys are pressed

function keyPressed() {
	if (keyCode === RIGHT_ARROW) { //setting the actions for "night"
		if (day.isPlaying()) {
    day.stop();
    night.play(); //stopping the sound of "day" if it was playing before and playing the night sound
  } else {
  	night.play();
  }
		background(51,19,179); //setting a different background
		for(let y = 0; y < itter; y++) { //setting the number of stars drawn
      let randomSize = random(minSize, maxSize);
      let randomX = random(width);
      let randomY = random(height); //setting randomised variables
      noStroke();
      let rOpacity = map(randomSize, minSize, maxSize, minOpacity, maxOpacity); //setting random opacity
      fill(255,255,255,rOpacity);
      ellipse(randomX, randomY, randomSize, randomSize); //drawing a star
  }
	} else if (keyCode === LEFT_ARROW) { //settingt the actions for "day"
		if (night.isPlaying()) {
    night.stop();
    day.play(); //stopping the sound of "night" if it was playing before and playing the day sound
  } else {
    day.play();
  }
		background(135,235,255); //setting a different background
		noStroke();
		fill(255,255,255);
		for (let y = 0; y < 30; y++) { //setting the number of clouds drawn
			let randomX = random(width);
			let randomY = random(height); //setting the position variables
			cloud(randomX, randomY, random(20,100)); //drawing a cloud with random size
		}
		fill(255,215,82);
		circle(0,0,350); //drawing the sun
	}
}

//all the functions below are shapes drawn for each number + one function for clouds
//all the numbers have different colours

function one(x,y,z) {
	fill(122,255,204);
	noStroke();
	quad(x,y,x+z,y,x+z,y+4*z,x,y+4*z);
}

function two(x,y,z) {
	fill(108,188,204);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x+z*3,y+z,x+z*4,y+z,x+z*4,y+z*4,x+z*3,y+z*4);
	quad(x,y+3*z,x+3*z,y+3*z,x+3*z,y+4*z,x,y+4*z);
	quad(x,y+4*z,x+z,y+4*z,x+z,y+7*z,x,y+7*z);
	quad(x+z,y+6*z,x+4*z,y+6*z,x+4*z,y+7*z,x+z,y+7*z);
}

function three(x,y,z) {
	fill(135,105,255);
	noStroke();
	quad(x,y,x+3*z,y,x+3*z,y+z,x,y+z);
	quad(x+3*z,y,x+4*z,y,x+4*z,y+7*z,x+3*z,y+7*z);
	quad(x,y+3*z,x+3*z,y+3*z,x+3*z,y+4*z,x,y+4*z);
	quad(x,y+6*z,x+3*z,y+6*z,x+3*z,y+7*z,x,y+7*z);	
}

function four(x,y,z) {
	fill(106,124,128);
	noStroke();
	quad(x,y,x+z,y,x+z,y+4*z,x,y+4*z);
	quad(x+z,y+3*z,x+z,y+4*z,x+4*z,y+4*z,x+4*z,y+3*z);
	quad(x+3*z,y+4*z,x+4*z,y+4*z,x+4*z,y+7*z,x+3*z,y+7*z);
}

function five(x,y,z) {
	fill(255,241,110);
	noStroke();
	quad(x,y,x+z,y,x+z,y+4*z,x,y+4*z);
	quad(x+z,y,x+4*z,y,x+4*z,y+z,x+z,y+z);
	quad(x+z,y+3*z,x+4*z,y+3*z,x+4*z,y+4*z,x+z,y+4*z);
	quad(x+3*z,y+4*z,x+4*z,y+4*z,x+4*z,y+7*z,x+3*z,y+7*z);
	quad(x,y+6*z,x+3*z,y+6*z,x+3*z,y+7*z,x,y+7*z);
}

function six(x,y,z) {
	fill(255,161,200);
	noStroke();
	quad(x,y,x+z,y,x+z,y+5*z,x,y+5*z);
	quad(x+z,y+2*z,x+4*z,y+2*z,x+4*z,y+3*z,x+z,y+3*z);
	quad(x+z,y+4*z,x+4*z,y+4*z,x+4*z,y+5*z,x+z,y+5*z);
	quad(x+3*z,y+3*z,x+4*z,y+3*z,x+4*z,y+4*z,x+3*z,y+4*z);
}

function seven(x,y,z) {
	fill(179,101,37);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+4*z,x+3*z,y+4*z);
	quad(x+2*z,y+2*z,x+3*z,y+2*z,x+3*z,y+3*z,x+2*z,y+3*z);
}

function eight(x,y,z) {
	fill(21,1,102);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x,y+4*z,x+4*z,y+4*z,x+4*z,y+5*z,x,y+5*z);
	quad(x,y+z,x+z,y+z,x+z,y+4*z,x,y+4*z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+4*z,x+3*z,y+4*z);
	quad(x+z,y+2*z,x+3*z,y+2*z,x+3*z,y+3*z,x+z,y+3*z);
}

function nine(x,y,z) {
	fill(255,190,135);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+5*z,x+3*z,y+5*z);
	quad(x,y+z,x+z,y+z,x+z,y+3*z,x,y+3*z);
	quad(x+z,y+2*z,x+3*z,y+2*z,x+3*z,y+3*z,x+z,y+3*z);
}

function zero(x,y,z) {
	fill(255,215,122);
	noStroke();
	quad(x,y,x+4*z,y,x+4*z,y+z,x,y+z);
	quad(x,y+4*z,x+4*z,y+4*z,x+4*z,y+5*z,x,y+5*z);
	quad(x,y+z,x+z,y+z,x+z,y+4*z,x,y+4*z);
	quad(x+3*z,y+z,x+4*z,y+z,x+4*z,y+4*z,x+3*z,y+4*z);
}

function cloud(x,y,z) {
	noStroke();
	circle(x,y,z);
	circle(x-z/2,y,z-z/2);
	circle(x+z/2,y,z-z/4);
}