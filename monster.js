function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(166, 174, 245)
  noStroke();
  
  //neck 
  push();
  stroke(0);
  fill(224, 201, 150)
  rect(205,150,10,20,4)
  rect(205,180,10,20,4)
  pop();
  
  //head
  push();
  fill(70, 76, 102)
  ellipse(200,100,100,90)
  rect(185,120,53,40,2)
  pop();
  
  //eyebrows
  push();
  fill(0)
  rect(190,110,20,5,2)
  rect(230,110,13,5,2)
  pop();
  
  //eyes
  push();
  fill(0)
  ellipse(200,116,15,10)
  ellipse(235,116,11,7)
  pop();
  
  //nose
  push();
  fill(0)
  ellipse(220,130,9,15)
  pop();
  
 //legs
  push();
  fill(201, 124, 77)
  rotate(-50)
  rect(290,300,20,120,10)
  rotate(50)
  rect(210,385,20,99,10)
  pop();
  
  //body
  push();
  fill(42, 44, 54)
  rect(167,190,80,200,20)
  fill(65, 69, 82)
  rect(180,195,60,180,20)
  pop();
  
  //face details
  push();
  fill(201, 124, 77)
  ellipse(190,90,30,9)
  pop();
  
  //shoes
  push();
  fill(90, 126, 140)
  rect(210,455,30,40)
  fill(70, 99, 110)
  rect(210,490,55,30,3)
  fill(90, 126, 140)
  rotate(-50)
  rect(290,400,30,40)
  fill(70, 99, 110)
  rect(290,430,55,30,3)
  pop();
  
  //arms
  push();
  fill(42, 44, 54)
  stroke(60, 60, 82)
  rotate(50)
  rect(100,260,20,125,4)
  pop();
  
  //details
  fill(69, 17, 12)
  rect(190,200,10,2)
  rect(185,203,15,2)
  rect(185,250,2,10)
  rect(188,255,2,15)
  
  //eyes
  fill(151, 232, 231)
  circle(203,115,5)

  
}