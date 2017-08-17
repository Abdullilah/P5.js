var balls = [];

var col;

var canvas;
var col;
var btn;
var slid;
var slidVal;
var label;
var inputEle;
var hoverEle;
var changeEle;

var inputEle1;
var inputVal1;
var inputSlid;

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
    
    label = createElement('p', 'Enter Your Name');
    label.style('color','#FF0000');
    
    inputEle = createInput('');
    
    hoverEle = createElement('p', 'Hover Over ME');
    hoverEle.mouseOver(hoverEleOver);
    hoverEle.mouseOut(hoverEleOut);
    
    //changed: when change and press enter
    changeEle = createElement('p', 'This text will change when you change the input');
    inputEle.changed(changeElement);
    
    //When change the value directly
    inputEle1 = createInput('');
    inputVal1 = createElement('p', 'Your name is');
    inputSlid = createSlider(10,64,16);
    
    inputEle1.input(changeName);
    inputSlid.input(changeSize);
}

function changeName(){
    inputVal1.html(inputEle1.value());
}

function changeSize(){
    inputVal1.style('font-size', inputSlid.value() + 'pt');
}

function hoverEleOver(){
    hoverEle.html("The Mouse is Over ME");
}

function hoverEleOut(){
    hoverEle.html("Now It's Out");
}

function changeElement(){
    changeEle.html(inputEle.value());
}

function changeColor(){
    col = color(random(0,255));
}

function draw() {
    background(10,10,100);
    fill(col);
    ellipse(250,250,slid.value(), slid.value());
    slidVal.html(slid.value());
    text(inputEle.value(), 10,30);
}

