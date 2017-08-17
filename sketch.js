var balls = [];

var col;

var canvas;
var col;
var btn;
var slid;
var slidVal;
var input;

function setup() {

    col = color(200);
    
    canvas = createCanvas(500,500);
    createElement('br');
    
    btn = createButton('Click Me');
    btn.mousePressed(changeColor);
    createElement('br');
    
    slid = createSlider(10,400, 200);
    slidVal = createElement('span', slid.value());
    createElement('br');
    
    createElement('p', 'Enter Your Name');
    input = createInput('');
    
}

function changeColor(){
    col = color(random(0,255));
}

function draw() {
    background(10,10,100);
    fill(col);
    ellipse(250,250,slid.value(), slid.value());
    slidVal.html(slid.value());
    text(input.value(), 10,30);
}

