var col = 0;
function setup() {
    createCanvas(600,200);
}

function draw() {
    //col = (255*mouseX)/600;
    //Using map() to make the same:
    //map(parameter, minOldrange, maxOldrange, minNewrange, maxNewrange);
    col = map(mouseX, 0, 600, 0, 255);
    background(col);
    noStroke(); 
    fill(255,255,0);
    ellipse(mouseX,mouseY, 10,10); 
    
}


