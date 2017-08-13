var colors = [255,0,0,0,255,0,0,0,255];
var index = 0;
function setup() {
  createCanvas(800,500);
  background(0);
}

function draw() {
    textSize(32);
    fill(100,100,100);
    text('Change color By clicking', width/4, height/2);
}

function mousePressed(){
    background(colors[index],colors[index+1],colors[index+2]);
    index += 3;
    if(index >= colors.length){
        index = 0;
    }
    print(colors[index]);
}




