var balls = [];
var numberBalls = 10;
var col;

function setup() {
    createCanvas(800,500);
    for(var i=0; i<numberBalls; i++){
        balls[i] = new Ball();
    }
}

function draw() {
    background(0);
    
    for(var i=0; i<balls.length; i++){
        balls[i].display();
        balls[i].move();
    }
}

function mousePressed(){
    for(var i=0; i<balls.length; i++){
        balls[i].clicked();
    }
}

//Constructor: start with big letter
function Ball(x,y){
    this.x = random(0,width);
    this.y = random(0,height);
    this.col = color(255,255,255);
    this.display = function(){
        fill(this.col);
        ellipse(this.x,this.y,40,40);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }
    this.clicked = function(){
        var d = dist(mouseX, mouseY, this.x, this.y);
        if(d< 20){
            this.col = color(255,0,0);
        }
    }
}


