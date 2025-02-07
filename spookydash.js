let sceneNum = 0;
let startTime;
let pixelFont;
let back1, back2, back3, girl, ghost, cakeeater, cake, wood;
let ghost1;
let woodPieces = [];
let woodNum = 5;
let timerStart;
let theCake;
let scene2EndTime;
let cakeEaters = [];
let cakeEaterSpeed = 2;
let girlX = 100;
let girlY = 325;

function preload() {
  back1 = loadImage('back/1back.jpg');
  back2 = loadImage('back/2back.png');
  back3 = loadImage('back/3back.jpg');
  girl = loadImage('characters/girl.png', img => img.resize(img.width * 0.25, img.height * 0.25));
  ghost = loadImage('characters/mainguy.png', img => img.resize(img.width * 0.25, img.height * 0.25));
  cakeeater = loadImage('characters/cakeeater.png');
  cake = loadImage('stuff/cake.png');
  wood = loadImage('stuff/log.png');
  pixelFont = loadFont('fonts/pixelFont.ttf');
}

function draw() {
  switch (sceneNum) {
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
      case -1:
      gameOver();
      break;
      case 4:
      youWon();
      break;
  }
}

function scene0() {
  background(0);
  fill(255, 197, 211);
  textAlign(CENTER);
  textFont(pixelFont);
  textSize(32);
  text("WELCOME :3", width / 2, height / 2);
  textSize(14);
  text("PRESS ENTER TO CONTINUE", width / 2, (2 * height) / 3);
}

function scene1() {
  image(back1, width / 2, height / 2, width, height);

  image(girl, girlX, girlY);

  ghost1.body();
  ghost1.move();

  let distance = dist(ghost1.x, ghost1.y, girlX, girlY);
  if (distance <= 90) {
    fill(255, 0, 0);
    textSize(9);
    textAlign(LEFT);
    text(
      "Girl:\nOh no, I dropped my birthday cake!\nCan you help me get them?\nThey're down the forest",
      ghost1.x,
      ghost1.y - 20
    );
  }

  if (ghost1.x <= 0) {
    sceneNum = 2;
    ghost1.setPosition(width / 2, height - 50);
    console.log("Switching to scene 2");
  }
}


function scene2() {
  image(back2, width / 2, height / 2, width, height);

  for (let i = 0; i < woodPieces.length; i++) {
    woodPieces[i].body();
    woodPieces[i].fall();
    woodPieces[i].checkCollision();
  }

  ghost1.body();
  ghost1.move();

  let timePassed = millis() - timerStart;
  if (timePassed >= 30000) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text("You Survived!", width / 2, height / 2);

    if (!scene2EndTime) {
      scene2EndTime = millis();
    }

    if (millis() - scene2EndTime >= 3000) {
      sceneNum = 3;
      ghost1.setPosition(50, height - 50);
    }
  }
}

function scene3() {
  image(back3, width / 2, height / 2, width, height);

  for (let i = 0; i < cakeEaters.length; i++) {
    cakeEaters[i].body();
    cakeEaters[i].move();

  
    if (cakeEaters[i].checkCollision(ghost1.x, ghost1.y, 40, 40)) { 
      sceneNum = -1; 
      console.log("Collision with CakeEater! Game Over!");
    }
  }
  
  theCake.body();
  
  
  if (theCake.checkCollision(ghost1.x, ghost1.y, 40, 40)) {
    sceneNum = 4; 
    console.log("You Won!");
  }

  ghost1.body();
  ghost1.move();
}

function gameOver() {
  background(0);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(32);
  text("GAME OVER", width / 2, height / 2);
}

function youWon() {
  background(0);
  fill(255, 197, 211);
  textAlign(CENTER);
  textSize(29);
  text("YOU WON THE GAME!", width / 2, height / 2);
}

class Wood {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 60;
    this.height = 30;
  }

  body() {
    image(wood, this.x, this.y, this.width, this.height);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-300, -100);
      this.x = random(0, width);
    }
  }

  checkCollision() {
    let distance = dist(this.x, this.y, ghost1.x, ghost1.y);
    if (distance <= this.width / 2 + 25) {
      sceneNum = -1;
      console.log("Game Over!");
    }
  }
}

class CakeEater {
  constructor(x, y, speed, img) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = img;
    this.width = 40;
    this.height = 40;
  }

  body() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = -random(50, 100);
    }
  }

  checkCollision(ghostX, ghostY, ghostWidth, ghostHeight) {
    
    // Check for overlap between the CakeEater and the ghost
    return (
      this.x < ghostX + ghostWidth &&
      this.x + this.width > ghostX &&
      this.y < ghostY + ghostHeight &&
      this.y + this.height > ghostY
    );
  }
}

class Cake {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.width = 50;
    this.height = 50;
  }

  body() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  checkCollision(ghostX, ghostY, ghostWidth, ghostHeight) {
    return (
      this.x < ghostX + ghostWidth &&
      this.x + this.width > ghostX &&
      this.y < ghostY + ghostHeight &&
      this.y + this.height > ghostY
    );
  }
}

class Ghost {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  body() {
    image(ghost, this.x, this.y);
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 3;
    }
  }
}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);

  ghost1 = new Ghost();
  ghost1.setPosition(width - 100, height - 50);

  for (let i = 0; i < woodNum; i++) {
    woodPieces.push(new Wood(random(0, width), random(-300, -100), random(2, 5)));
  }

  for (let i = 0; i < 5; i++) {
    cakeEaters.push(new CakeEater(width - 300, -i * 80, cakeEaterSpeed, cakeeater)); // left line
    cakeEaters.push(new CakeEater(width - 150, -(i * 80 + 40), cakeEaterSpeed, cakeeater)); // right line
  }
  
  theCake = new Cake(width - 50, height / 2, cake);


  timerStart = millis();
}

function keyPressed() {
  if (sceneNum === 0 && keyCode === ENTER) {
    startTime = millis();
    sceneNum = 1;
    console.log("Enter key pressed, moving to scene 1");
  }
}