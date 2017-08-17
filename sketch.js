var myArr = ["Sami", "David", "Monika", "Samolia"];

function setup() {
        
    var btn = select('button');
    
    btn.mousePressed(addEle);
    
}

function addEle(){
    var randVar = floor(random(0,myArr.length));
    var li = createElement('li', myArr[randVar]);
    li.parent('myList');
}

function draw() {
    
}

