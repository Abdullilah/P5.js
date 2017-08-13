var ball1 = {
    x: 100,
    y: 100,
    size: 100,
    stickx:80,
    sticky: 140,
    stickWidth: 40,
    stickHeight: 100
}

var ball2 = {
    x: 300,
    y: 200,
    size: 150,
    stickx:280,
    sticky: 240,
    stickWidth: 40,
    stickHeight: 100
}

function setup() {
  createCanvas(800,500);
  
}

function draw() {
    background(0,0,0);
    stroke(255); 
    strokeWeight(1);
    
    stickPlot(ball1.stickx,ball1.sticky,ball1.stickWidth,ball1.stickHeight);
    ballPolat(ball1.x,ball1.y,ball1.size,ball1.size);
    
    stickPlot(ball2.stickx,ball2.sticky,ball2.stickWidth,ball2.stickHeight);
    ballPolat(ball2.x,ball2.y,ball2.size,ball2.size);
}

function stickPlot(x,y,z,m){
    rect(x,y,z,m);
    fill(0,0,255);
}

function ballPolat(x,y,z,m){
    ellipse(x,y,z,m);
    fill(255,0,0);
}




