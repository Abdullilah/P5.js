var pos = {
    x: 0,
    y: 0
}

var col = {
    r: 0,
    g: 0,
    b: 0
}
function setup() {
    createCanvas(800,400);
    background(0,0,0);
}

function draw() {
    
    pos.x = random(0, 800); // random(minRange,maxRange)
    pos.y = random(0, 400);
    
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    
    noStroke(); 
    fill(col.r, col.g , col.b, 100);
    ellipse(pos.x,pos.y, 20,20); 
    
}


