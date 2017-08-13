var balls = [];
var numberBalls = 10;

function setup() {
    createCanvas(800,500);
}

function draw() {
    background(0);
    for(var i=0; i<numberBalls; i++){
        balls[i] = new Ball();
    }
    for(var i=0; i<balls.length; i++){
        balls[i].display();
        balls[i].move();
    }
}

function mousePressed(){
    numberBalls += 10;
}

//Constructor: start with big letter
function Ball(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.display = function(){
        stroke(255);
        noFill();
        strokeWeight(2);
        ellipse(this.x,this.y,25,25);
    }
    this.move = function(){
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
    }
}


