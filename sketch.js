var on = false;
function setup() {
  createCanvas(800,400);
  background(0,0,0);
}

function draw() {
    stroke(255); 
    strokeWeight(1);
    fill(0,0, 255);

    var x = 0;
    while(x<= width){
       rect(x,200,20,20);
       x += 22;
    }
    
    for (x=0; x<= width; x+= 22){
        rect(x,100,20,20);
    }
    
}

