var circle1 = {
    xPos: 50,
    yPos: 200,
    speed: 10
}
var circle2 = {
    xPos: 400,
    yPos: 50,
    speed: 10
}
function setup() {
    createCanvas(800,400);
}

function draw() {
    
    background(0,0,0);
    
    stroke(255); 
    strokeWeight(4);
    
    if(circle1.xPos > width-50 || circle1.xPos < 50){
        circle1.speed = circle1.speed* -1;
    } 
    circle1.xPos += circle1.speed;
    ellipse(circle1.xPos, circle1.yPos, 100,100); 
    fill(250, 0 , 0);

    if(circle2.yPos > height-50 || circle2.yPos < 50){
        circle2.speed = circle2.speed* -1;
    } 
    circle2.yPos += circle2.speed;
    ellipse(circle2.xPos, circle2.yPos, 100,100); 
    fill(0, 250 , 0);
}

function mousePressed(){
    circle1.xPos = 50;
    circle2.yPos = 50;
}