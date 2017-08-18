var myArr = ["Sami", "David", "Monika", "Samolia"];

function setup() {
    
    for(var i=0; i<10; i++){
        var randVar = floor(random(0,myArr.length));
        var li = createElement('li', myArr[randVar]);
        li.class('green');
        li.parent('myList');
        li.mousePressed(myFun);
    }
    
}

function myFun(){
    this.removeClass('green');
    this.class('blue');
}

function draw() {
    
}

