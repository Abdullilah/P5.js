var sliders = [];
var angle = 0;

function setup() {
    
    
    for(var i=0; i<400; i++){
        sliders[i] = createSlider(0,255, 0);
    }
}



function draw() {
    var offset = 0;
    for(var i=0; i<sliders.length; i++){
        sliders[i].value(map(sin(angle+offset), -1,1, 0, 255));
        offset += 0.025;
    }
    angle += 0.1;
    
}

