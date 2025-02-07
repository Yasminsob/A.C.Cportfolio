function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  noStroke();
  
  //pink bottle sunday
  push();
  fill(248, 200, 220);
  if (mouseX > 200 && mouseX < 250 && mouseY > 200 && mouseY < 294) {
    translate(random(-1, 1), random(-1, 1)); 
  }
  fill(248, 200, 220)
  rect(200,200,50,94,9);
  rect(216,163,18,40,3);
  pop();
  
  //blue bottle monday
  push();
  fill(182, 208, 226)
  if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 394) {
    translate(random(-3, 3), random(-3, 3)); 
  }
  rect(300,300,50,94,9);
  rect(316,263,18,40,3);
  pop();
  
  //green bottle tuesday
  push();
  fill(193, 225, 193)
  if (mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 194) {
    translate(random(-5, 5), random(-5, 5)); 
  }
  rect(100,100,50,94,9);
  rect(116,63,18,40,3);
  pop();
  
  //yellow bottle wednesday
  push();
  fill(255, 253, 208)
  if (mouseX > 380 && mouseX < 430 && mouseY > 480 && mouseY < 574) {
    translate(random(-1, 1), random(-1, 1)); 
  }
  rect(380,480,50,94,9);
  rect(396,433,18,60,3);
  pop();
  
  //red bottle thursday
  push();
  fill(227, 66, 52)
  if (mouseX > 400 && mouseX < 450 && mouseY > 100 && mouseY < 194) {
    translate(random(-3, 3), random(-3, 3)); 
  }
  rect(400,100,50,94,9);
  rect(416,75,18,30,3);
  pop();
  
  //purple bottle friday
  push();
  fill(195, 177, 225)
  if (mouseX > 100 && mouseX < 150 && mouseY > 400 && mouseY < 494) {
    translate(random(-5, 5), random(-5, 5)); 
  }
  rect(100,400,50,94,9);
  rect(116,363,18,40,3);
  pop();
  
  //orange bottle saturday
  push();
  fill(250, 200, 152)
  if (mouseX > 500 && mouseX < 560 && mouseY > 300 && mouseY < 404) {
    translate(random(-8, 8), random(-8, 8)); 
  }
  rect(500,300,60,104,9);
  rect(515,272,30,30,3);
  pop();
}