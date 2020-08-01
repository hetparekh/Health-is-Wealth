var form
var c=0
var bg
function preload(){
bg=loadImage("4.jpg")
}
function setup() {

  createCanvas(displayWidth,displayHeight);
form=new Form()
form.display();
}

function draw() {
background(bg)
}