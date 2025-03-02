let font;
let letter;
let xPos = 170;
let yPos = 200;
let fontSize = 200;
let letterObjects = [];

function preload(){

    font = loadFont('NotoNaskhArabic-VariableFont_wght.ttf')
}

function setup(){
    createCanvas(600,600);

    //textToPoints(str, x, y, [fontsize], [options])
    // converting the letter W into an array of x,y values
    letter = font.textToPoints("نهاد", xPos, yPos, fontSize, {
        sampleFactor: 0.3
    });


    for(let i=0; i < letter.length; i++){
        letterObjects[i] = new LetterObject(letter[i].x, letter[i].y)
    }
}


console.log(letter)
console.log(letterObjects)

function draw(){
    background(60,179,113);
    stroke(255);

    for(let i = 0; i < letterObjects.length; i ++){
        letterObjects[i].show();
        letterObjects[i].move();
    }
    
    console.log(letterObjects[1]);
}

function mousePressed(){
    for(let i = 0; i < letterObjects.length; i++){
        letterObjects[i].reset();
    }
}

class LetterObject {
    // setting up the values for a Letter Object 
constructor(x,y) {
    this.x = x; //original x
    this.y = y; //original y
    this.x_ = x; //updated x
    this.y_ = y; //updated y
}

show(){
   fill(0);
   circle(this.x_, this.y_, 2)
}

move(){
    //dist(x1,y1,x2,y2)
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY)
    if(mouseDistance <= 10){
        //this.x = this.x + random(-10,10);
        this.x += random(-10,10);
        this.y += random(-10,10);
    }
}

reset(){
    this.x_ = this.x;
    this.y_ = this.y;
}
}