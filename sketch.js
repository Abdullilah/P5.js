var ball = {
    x: 10,
    y: 10,
    speedX: 10,
    speedY: 10
}
function setup() {
  createCanvas(800,500);
  
}

function draw() {
    background(0,0,0);
    stroke(255); 
    strokeWeight(1);
    
    fillColor();
    move();
    checkIt();
}

function fillColor(){
    ellipse(ball.x,ball.y,20,20);
    fill(random(0,255),0,random(0,255));
}

function move(){
    if(ball.x > width-10 || ball.x < 10){
        ball.speedX *= -1;
    }
    if(ball.y > height-10 || ball.y< 10){
        ball.speedY *= -1;
    }
}

function checkIt(){
    ball.x += ball.speedX;
    ball.y += ball.speedY;
}

