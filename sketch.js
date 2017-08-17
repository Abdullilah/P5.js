var balls = [];

var col;

var canvas;
var h2;
var x = 20;

function setup() {
    canvas = createCanvas(800,500);
    //Change the position of an element
    canvas.position(20,300);
    h2 = createElement('h2', 'I made this by using createElement form P5.js');
    createP("This is a paragraph added from P5");
//    createDiv();
//    createButton();
//    createImg();
    
    for(var i=0; i<500; i++){
        balls[i] = new Ball(random(0,width), random(0,width));
    }
}

function mousePressed(){
    h2.html("I changed it by mousePress event P5.js");
}

function draw() {
    background(0);
    h2.position(x+random(-5,5), 100);
    
    for(var i=0; i<balls.length; i++){
        balls[i].display();
        balls[i].move();
        for(var j=0; j<balls.length; j++){
            if(i != j && balls[i].overlapping(balls[j])){
                balls[i].changeColor();
                balls[j].changeColor();
                balls[i].r /= 1.1;
                balls[j].r /= 1.1;
                if(balls[i].r <= 0){ balls.splice(i,1); }
                if(balls[j].r <= 0){ balls.splice(j,1); }
            }   
        }
    }
}

//Constructor: start with big letter
function Ball(x,y){
    this.x = x;
    this.y = y;
    this.r = 20;
    this.col = color(255,200);
    this.display = function(){
        noStroke();
        fill(this.col);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.move = function(){
        this.x = this.x + random(-3,3);
        this.y = this.y + random(-3,3);
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


