var balls = [];
var numberBalls = 10;

function setup() {
    createCanvas(800,500);
}

function draw() {
    background(0);
    for(var i=0; i<numberBalls; i++){
        balls[i] = {
            x: random(0,width),
            y: random(0,height),
            display: function(){
                stroke(255);
                noFill();
                strokeWeight(2);
                ellipse(this.x,this.y,25,25);
            },
            move: function(){
                this.x = this.x + random(-5,5);
                this.y = this.y + random(-5,5);
            }
        }
    }
    for(var i=0; i<balls.length; i++){
        balls[i].display();
        balls[i].move();
    }
}

function mousePressed(){
    numberBalls += 10;
}




