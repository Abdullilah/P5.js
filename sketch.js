var balls = [];
var numberBalls = 10;
var col;

function setup() {
    createCanvas(800,500);
}

function draw() {
    background(0);
    
    for(var i=0; i<balls.length; i++){
        balls[i].display();
        balls[i].move();
        if(balls[i].life <= 0){
            balls.splice(i,1);
        }
    }
}

function mousePressed(){
    balls.push(new Ball(mouseX, mouseY));
}

//Constructor: start with big letter
function Ball(x,y){
    this.x = x;
    this.y = y;
    this.life = 255;
    this.display = function(){
        stroke(255);
        fill(255, this.life);
        ellipse(this.x,this.y,40,40);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
        this.life = this.life - 1;
    }
    
}


