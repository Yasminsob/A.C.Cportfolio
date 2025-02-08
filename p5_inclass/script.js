let gothic;
let heyArray = []
let r = 0

function preload() {
    gothic = loadFont('gothic.otf')
}

function setup (){
   let canvas = createCanvas(600,600);
   canvas.parent("sketch")

   textFont(gothic)
   textSize(200);

   heyArray = gothic.textToPoints("hey", width/2-100, height/2, 200, {
    sampleFactor: 0.8
   })
   console.log(heyArray)
}

function draw(){
background(200);


for(let i = 0; i < heyArray.length; i++){
    let x = heyArray[i].x;
    let y = heyArray[i].y;

    // circle(x,y, 10)


    // beginShape(POINTS);
    // vertex(x,y);
    // endShape(CLOSE);


    push();
    translate(x,y);
    rotate(r);
    r+=4;
    line(-10, -10, 10, 10)

    pop();
}


// text("hey", width/2-100, height/2)
}