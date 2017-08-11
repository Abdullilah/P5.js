var xLocation = 0; // declear variable
var myCircle = {
    x: 500,
    y: 300,
    size: 20
}

function setup() {
    createCanvas(500,500);
    background(100,100,100);
}

function draw() {
    fill(10,10,10);
    rect(10,10,100,100);
    
    noStroke();
    fill(255,0,0);
    ellipse(240,115, 60,60);
    
    line(200,200,300,300);
    
    noStroke(); // remove borders
    fill(255,255,0);
    ellipse(mouseX,mouseY, 10,10); // mouse position
    
    fill(0,0,250);
    rect(xLocation,200,50,50);
    xLocation += 1;
    
    noStroke();
    fill(0,255,0);
    ellipse(myCircle.x, myCircle.y, myCircle.size, myCircle.size);
    myCircle.x -= 1;
}

function mousePressed(){
    background(100,100,100); // mouse click event
}