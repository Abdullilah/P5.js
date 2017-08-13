var balls = [];
var b1;
var b2;

var col;

function setup() {
    createCanvas(800,500);
    b1 = new Ball(100, 200);
    b2 = new Ball(200, 200);
    
}

function draw() {
    background(0);
    
    b1.display();
    b1.move();
    b2.display();
    b2.move();
    
    var status = b1.overlapping(b2);
    if(status){
        b1.changeColor();
        b2.changeColor();
    }
}

//Constructor: start with big letter
function Ball(x,y){
    this.x = x;
    this.y = y;
    this.r = 40;
    this.col = color(255,200);
    this.display = function(){
        stroke(255);
        fill(this.col);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }
    this.overlapping = function(other){
        var d = dist(this.x, this.y, other.x, other.y);
        if(d < this.r + other.r){
            return true;
        } else {
            return false;
        }
    }
    this.changeColor = function(){
        this.col = color(random(255),random(255),random(255),200);
    }
    
}


