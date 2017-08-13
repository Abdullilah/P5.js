var ball = {
    x: 400,
    y: 400,
    size: 40,
    display: function(){
        rect(this.x,this.y,this.size,this.size);
        fill(0,0,255);
    },
    move: function(){
        this.x = this.x + random(-40,40);
        this.y = this.y + random(-40,40);
        if(this.x<0 || this.x > width || this.y<0 || this.y> height){
            this.x = 400;
            this.y = 400;
        }
    }
}

function setup() {
  createCanvas(800,500);
  
}

function draw() {
    background(0,0,0);
    stroke(255); 
    strokeWeight(1);
    
    ball.display();
    ball.move();
}




