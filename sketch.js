var flower;

function preload(){
    flower = loadJSON('flower.json');
}

function setup() {
    
    createCanvas(400, 400);
    
}



function draw() {

    background(0);
    fill(flower.color[0], flower.color[1], flower.color[2]);
    text(flower.name, 10, 30);
    textSize(30);
    
}

