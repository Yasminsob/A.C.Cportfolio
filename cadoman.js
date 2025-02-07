//please left click to see mr.cado and change his color

avocadoColorsOne = ["#1F360D", "#153D29", "#2C5E23", "#123313", "#064216", "#445C3C"];
avocadoColorsTwo = ["#3E793F", "#3E7E46", "#1DA533", "#409952", "#339940", "#6c9444"];
avocadoColorsThree = ["#83FF51", "#CDE2A7", "#8ACE86", "#e5f0a5", "#A5DA87", "#c6eba0", "#8CD186"];
blushColor = ["#E2A7E1", "#F6D2F7", "#FEE6FF"];

let eyeX1, eyeY1, eyeX2, eyeY2; // Positions
let eyeSize = 20; // size of eyes
let pupilSize = 10; // pupil size
let pupilMaxOffset = 5; //max distance the pupils can move within eye


function setup() {
  createCanvas(400, 400);
     noStroke();
  eyeX1 = 170; // X position for first eye
  eyeY1 = 150; // Y position for both eyes
  eyeX2 = 230; // X position for second eye
  eyeY2 = 150;
}

  function draw() {
  drawEye(eyeX1, eyeY1);
  drawEye(eyeX2, eyeY2);
}

function drawEye(x, y) {
  //the white of the eye
  fill(255);
  ellipse(x, y, eyeSize, eyeSize);

  //angle from the eye to the mouse
  let angle = atan2(mouseY - y, mouseX - x);

  //pupil's position based on the angle and max offset
  let pupilX = x + cos(angle) * pupilMaxOffset;
  let pupilY = y + sin(angle) * pupilMaxOffset;

  // Drawing the pupil
  fill(0);
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
  }
function mousePressed(){
  background("FFFFFF");
  
  //outermost cado
  push();
  fill(random(avocadoColorsOne));
  ellipse(200,200,200,255);
  pop();
  
  //middle cado
  push();
  fill(random(avocadoColorsTwo));
  ellipse(200,200,180,245);
  pop();
  
  //inside cado
    push();
  fill(random(avocadoColorsThree));
  ellipse(200,200,150,225);
  pop();
  
  //blush 1
  push();
  fill(random(blushColor));
  ellipse(160,180,20,10)
    ellipse(240,180,20,10)
  pop();
  

  //seed
   push();
  fill(81,52,3);
  circle(200,250,70);
  pop();
  
  //highlight
  push();
  fill(112,76,14);
  circle(190,245,25);
  pop();
  
  push();
  stroke(0,0,0)
  arc(200, 180, 30, 15, 0, radians(180), PIE);
  pop();
  
}
