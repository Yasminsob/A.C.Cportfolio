let font2;
let points2 = [];

function preload() {
    font2 = loadFont('gothic.otf');
}

function setup() {
    createCanvas(600, 600);
    textFont(font2);
    textSize(200);
    points2 = font2.textToPoints("heinz", 100, 300, 150, { sampleFactor: 0.2 });
}

function draw() {
    background(255,99,71);
    stroke(255);
    noFill();
    
    for (let i = 0; i < points2.length; i++) {
        let yOffset = sin(frameCount * 0.05 + i * 0.1) * 5;
        circle(points2[i].x, points2[i].y + yOffset, 5);
    }
}