var on = false;
function setup() {
  createCanvas(800,500);
  
}

function draw() {
    background(0,0,0);
    stroke(255); 
    strokeWeight(1);

    for (var x=25; x<= mouseX; x+= 50){
        for (var y=25; y<= mouseY; y+= 50){
            fill(random(0,255),0,random(0,255));
            ellipse(x,y,25,25);
        }
    }
}

