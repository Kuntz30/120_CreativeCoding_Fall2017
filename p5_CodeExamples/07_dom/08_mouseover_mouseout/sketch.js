// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015


// Using p5 DOM element mouse listeners, mouseOver and mouseOut.

// We define the variables outside of setup so we can access them from anywhere in the sketch.
var img;
var canvas;


function setup() {

  createP("The image appears only when the mouse is over the canvas element.");

  // Make the canvas
  canvas = createCanvas(320, 240);
  // Make an HTML image element (different from loadImage()!)
  img = createImg("rainbow.png");

  // Here we call methods of DOM Image element to set the size and style.
  img.size(200, 200);
  img.style("padding","10px");
  img.hide();

  // Attach listeners for mouse events related to canvas
  canvas.mouseOver(uniShow);
  canvas.mouseOut(uniHide);
}


// A simple animation
function draw() {
  background(51, 50);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}

// Create functions for hiding and showing uni image.
// These will be hooked into mouse events related to canvas above.
function uniHide() {
  img.hide();
}

function uniShow() {
  img.show();
}
