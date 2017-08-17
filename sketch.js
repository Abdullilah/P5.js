function setup() {
    
    canvas = createCanvas(500,500);
    
    var firstEleByTagName = select('p');
    firstEleByTagName.style('color', 'red');
    
    var elementsByTagName = selectAll('p');
    for(var i=0; i<elementsByTagName.length; i++){
        elementsByTagName[i].style('color', 'red');
        elementsByTagName[i].mouseOver(myFun);
    }
    
    var eleById = select('#idName');
    var eleByClass = select('.className');
}

function myFun(){
    // Using 'this' to bind the selected element
    this.style('background', 'green');
}

function draw() {
    
}

