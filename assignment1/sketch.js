let capture;
let vScale=4;
var clicks = 0;
let clickBool = false;
function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.hide();
    imageMode(CENTER);
}

function preload() {
  sound = loadSound('Phone.mp3');
  ghost = loadImage('pngfuel.com.png');
  fire = loadImage('fire.png');
}

function draw() {
  background(255, 252, 0);
  scale(1 / 2)
  image(ghost, 400, 350)
  if (clicks >= 3) {
    image(fire, 400, 700, 125, 150);
  }
  if (frameCount % 10 == 0) {
    tint(random(256), random(256), random(256))
  }
  capture.loadPixels();
  
  for (let y = 0; y < capture.width; y += 2){
  	for (let x = 0; x < capture.height; x += 2){
      let offset = ((y*capture.width)+x)*4;
      fill(capture.pixels[offset+0],
           capture.pixels[offset+1],
           capture.pixels[offset+2]);
      noStroke();
      rect(x*vScale, y*vScale, vScale*vScale, vScale*vScale);
    }
  }
  textSize(50);
  textAlign(CENTER, CENTER);
  text(clicks, 400, 710);
}

function mousePressed() {
  clicks++;
  sound.play();

  if (clicks >= 3) {
    clickBool = true;
    
  } else {}
}