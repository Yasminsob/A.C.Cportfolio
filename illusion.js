let gridSize = 40;
let circleSize = 30;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background ("#F5EFEB")
  noStroke();

  for (let i = 0; i < width / gridSize; i++) {
    for (let j = 0; j < height / gridSize; j++) {
      
      let x = i * gridSize + 20;
      let y = j * gridSize + 20;
      
      let distance = dist(mouseX, mouseY, x, y);
       if (distance < 90){ 
        x += random(-2, 2);
        y += random(-2, 2);
      }
      
      if ((i + j) % 2 == 0) {
        fill("#C8D9E6");
      }else {
        fill("#2F4156");
      }
      
      circle(x, y, circleSize);
    }
  }
}