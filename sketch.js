var on = false;
function setup() {
  createCanvas(800,400);
  background(0,0,0);
}

function draw() {
  stroke(255); 
  strokeWeight(4);
  rectMode(CENTER);
  rect(400,200,200,200);
  fill(0,0, 255);
    
  if(mouseX > 300 && mouseX < 500 && mouseY > 100 && mouseY < 300){
    fill(255,0, 0);
  }   
}

function mousePressed(){
  if(mouseX > 300 && mouseX < 500 && mouseY > 100 && mouseY < 300){
    on = !on;
    if(on){
      background(255,255,255);
    } else{
      background(0,0,0);
    }
  }
}