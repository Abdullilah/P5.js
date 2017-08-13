var balls = [];
var numberBalls = 10;

function setup() {
    createCanvas(800,500);
}

function draw() {
    background(0);
    
    for(var i=0; i<balls.length; i++){
        balls[i].display();
        balls[i].move();
    }
    
}

function mouseDragged(){
    balls.push(new Ball(mouseX, mouseY));
    if(balls.length > 20){
        balls.splice(0,1);
    }
}

function keyPressed(){
    balls.splice(0,1);
}

//Constructor: start with big letter
function Ball(x,y){
    this.x = x;
    this.y = y;
    this.display = function(){
        stroke(255);
        fill(random(0,255),random(0,255),random(0,255),100);
        strokeWeight(2);
        ellipse(this.x,this.y,25,25);
    }
    this.move = function(){
        this.x = this.x + random(-2,2);
        this.y = this.y + random(-2,2);
    }
}


