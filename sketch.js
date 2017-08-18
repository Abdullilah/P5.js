function setup() {
    
    var dragArea = select('.dragHere');
    
    dragArea.dragOver(highLight);
    dragArea.dragLeave(unhighLight);
    dragArea.drop(myFile, unhighLight);
    
}

function highLight(){
    this.style('background', '#ccc');
}

function unhighLight(){
    this.style('background', '#fff');
}

function myFile(file){
    createP(file.name);
    createP(file.size);
    createP(file.type);
    var img = createImg(file.data);
    img.size(200,200);
}

function draw() {
    
}

