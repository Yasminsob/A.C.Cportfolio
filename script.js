let font;
let points1 = [];

function preload() {
    font = loadFont('gothic.otf');
}

function setup() {
    createCanvas(600, 600);
    textFont(font);
    textSize(200);
    points1 = font.textToPoints("Wave", 100, 300, 150, { sampleFactor: 0.2 });
}

function draw() {
    background(100,149,237);
    stroke(255);
    noFill();
    
    for (let i = 0; i < points1.length; i++) {
        let d = dist(mouseX, mouseY, points1[i].x, points1[i].y);
        let jitter = d < 50 ? random(-5, 5) : 0;
        circle(points1[i].x + jitter, points1[i].y + jitter, 5);
    }
}