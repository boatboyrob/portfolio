let numSquares = 200
let origin
function setup() {
  createCanvas(840,480)
  // add particle system array
  systems = [];
  
  //origin = [mouseX,mouseY]
 origin = [width/2,height/2]
//console.log(origin)
  for(let i = 0; i < numSquares; i++) {
    let pos = height/2//random(20,460)
    let square = {}
    square.initX = width/2
    square.initY = pos
    square.initLife = random(0,200)
    square.x = width/2//origin[0]
    square.y = pos
    // squarePosition.push(pos)
    let velY = random(0,1)
    velY = random([-1,1])*velY
    let velX = random(0,1)
    velX = random([-1,1])*velX
    square.velocityY = velY
    square.velocityX = velX
    // squareVelocity.push(vel)
    let value = random([100,150,200])
    square.value = value
    square.moveSquare = moveSquare
    square.drawSelf = drawSelf
    square.life = square.initLife
    // squareValue.push(value)
    // console.log(square)
    squares.push(square)
  }
  // console.log(squares)
}
let squares = []

// let squareValue = [
// ]
// let squarePosition = [
// ]

// let squareVelocity = [
// ]

let messages = [
  "Once",
  "Twice",
  "Thrice"
]
let j = 0

// Creating blue circle button
let button = {
  x:80, // position of circle
  y:60, // position of circle
  width: 100, // size of the shape
  height: 100, // size of the shape
  color: "blue", // color of the shape
  shape: "circle" // type of the shape
}

// Creating green square button
let button2 = {
  x:160,
  y:10,
  width: 100,
  height: 100,
  color: "green",
  shape: "square"
}

// Creating red circle button
let button3 = {
  x:340, 
  y:60, 
  width: 100,
  height: 100,
  color: "red",
  shape: "circle"
}

// Creating the shape maker button
let button4 = {
  x:500, 
  y:75, 
  width: 32.5,
  height: 75,
  color: "gold",
  shape: "usermade"
}

// Creating the shape maker button
let buttonp = {
  x:600, 
  y:10, 
  width: 100,
  height: 100,
  color: "purple",
  shape: "particles"
}


// function to detect the mouse is in the button by the x and y coordinates
function mouseIn(x,y,button) {
  return (x > button.x
  && y > button.y
  && x < button.x + button.width
  && y < button.y + button.height)
}

// function to detect the mouse is in the button 2 by the x and y coordinates
function mouseIn(x,y,button2) {
  return (x > button2.x
  && y > button2.y
  && x < button2.x + button2.width
  && y < button2.y + button2.height)
}

// function to detect the mouse is in the button 3 by the x and y coordinates
function mouseIn(x,y,button3) {
  return (x > button3.x
  && y > button3.y
  && x < button3.x + button3.width
  && y < button3.y + button3.height)
}

// function to detect the mouse is in the button 4 by the x and y coordinates
function mouseIn(x,y,button4) {
  return (x > button4.x
  && y > button4.y
  && x < button4.x + button4.width
  && y < button4.y + button4.height)
}

// function to detect the mouse is in the button p by the x and y coordinates
function mouseIn(x,y,buttonp) {
  return (x > buttonp.x
  && y > buttonp.y
  && x < buttonp.x + buttonp.width
  && y < buttonp.y + buttonp.height)
}

//creating boolean saying the particle button has not been clicked
let pbutton_clicked = false

// function to move the particle system with the mouse
function mouseMoved() {
  if (pbutton_clicked==true){
  this.p = new ParticleSystem(createVector(mouseX, mouseY));
  systems.push(p);
  }
}

// The starting color for the shape the program will draw is black and the starting shape is a circle
let shapeColor = "black"
let typeofShape = "circle"

// if the mouse is clicked in a button, change the shape and color to that button's shape and color
function mouseClicked() {
  if(mouseIn(mouseX,mouseY,button)) {
  shapeColor = button.color //changes the color of the button
  typeofShape = button.shape //changes the shape of button
  newshapearray = []
  pbutton_clicked = false
  } 
  else if (mouseIn(mouseX,mouseY,button2)){
  //console.log("Clicked")
  shapeColor = button2.color
  typeofShape = button2.shape
  newshapearray = []
  pbutton_clicked = false
  } 
  else if (mouseIn(mouseX,mouseY,button3)){
  //console.log("Clicked")
  shapeColor = button3.color
  typeofShape = button3.shape
  newshapearray = []
  pbutton_clicked = false
  }
  else if (mouseIn(mouseX,mouseY,button4)){
    //console.log("Clicked")
    shapeColor = button4.color
    typeofShape = button4.shape
    pbutton_clicked = false
    }
  else if (mouseIn(mouseX,mouseY,buttonp)){
      //console.log("Clicked")
      pbutton_clicked = true
      shapeColor = buttonp.color
      typeofShape = buttonp.shape
      }
    if (typeofShape=="usermade"){
      //console.log("Pressed " + [mouseX,mouseY])
      newshapearray.push([mouseX,mouseY])
    }
   //console.log(newshapearray)
  j++
}

//this is the position of the shape
let shapeX = -100 
let shapeY = -100 
//this is the size of the shape
let shapeWidth = 10
let shapeHeight = 10

// this is an array to store the list of shapes created
let listofshapes = []

// this is the array to store the special shape made by the user
let newshapearray = []

// this is a function that tells the program were the mouse was clicked
function mousePressed() {
  //console.log("Pressed " + [mouseX,mouseY])
  shapeX = mouseX
  shapeY = mouseY
}

//this is a function that records what shape and what color is made by the mouse
function mouseReleased() {
  //console.log("Released " + [mouseX,mouseY])
  //add the size and position of the shape to the memory array
  listofshapes.push([shapeX, shapeY, mouseX,mouseY,shapeColor, typeofShape])
}

// this function draws all the shapes
function draw() {
  background(255)
  // this for loop draws all the previous shapes
  for (let i=0; i < listofshapes.length; i++){
    shapeXnew = listofshapes[i][0]
    shapeYnew = listofshapes[i][1]
    mouseXnew = listofshapes[i][2]
    mouseYnew = listofshapes[i][3]
    shapeColornew = listofshapes[i][4]
    shapeWidthnew = dist(shapeXnew, shapeYnew, mouseXnew, mouseYnew)
    formofShape = listofshapes[i][5]
    fill(shapeColornew)
    // this if statement detemines if the shape to draw is a circle or square
    if (formofShape=="circle"){
      ellipse(shapeXnew, shapeYnew, shapeWidthnew*2)
    } else if (formofShape=="square"){
      rect(shapeXnew, shapeYnew, shapeWidthnew*2)
    }
    
  }

  //draw the special shape if there is one
  if (newshapearray.length>2 && typeofShape=="usermade"){
    stroke(50);
    // draw the shape by taking the coordinates clicked and drawing a line between them
    beginShape();
    for (let i=1; i < newshapearray.length; i++){
      vertex(newshapearray[i][0],newshapearray[i][1])
    }
    //close the shape
    endShape();
}

  //this draws the current shape with the selected color
  if(mouseIsPressed) {
  shapeWidth = dist(shapeX, shapeY, mouseX, mouseY)
  }
  fill(shapeColor)

  //checking if the current shape is a circle or square
  if (typeofShape=="circle"){
    ellipse(shapeX, shapeY, shapeWidth*2)
  } else if (typeofShape=="square"){
    rect(shapeX, shapeY, shapeWidth*2)
  } 

  let pbutton = false
  // this highlights the button that was clicked
  if(mouseIn(mouseX,mouseY,button)) {
    stroke("black")
    strokeWeight(20)
    
  }
  else if(mouseIn(mouseX,mouseY,button2)) {
    stroke("black")
    strokeWeight(20)
  }
  else if(mouseIn(mouseX,mouseY,button3)) {
    stroke("black")
    strokeWeight(20)
  } 
  else if(mouseIn(mouseX,mouseY,button4)) {
    stroke("black")
    strokeWeight(20)
  }
  else if(mouseIn(mouseX,mouseY,buttonp)) {
    stroke("black")
    strokeWeight(20)
  }

  //these create the buttons to click
  fill(button.color)
  ellipse(button.x,button.y, button.width, button.height)
  fill(button2.color)
  rect(button2.x,button2.y, button2.width, button2.height)
  fill(button3.color)
  ellipse(button3.x,button3.y, button3.width, button3.height)
  fill(button4.color)
  star(button4.x,button4.y, button4.width, button4.height, 5);
  fill(buttonp.color)
  rect(buttonp.x,buttonp.y, buttonp.width, buttonp.height);
  textSize(24);
  fill("white");
  text('particles!', 602, 60);
  
  noStroke()
  fill(0)
  
  //add particles to the screen if the particles button was pressed
  if (pbutton_clicked == true){
  for (i = 0; i < systems.length; i++) {
    //if there are more than 2 particle systems, remove the first one
    if (systems.length > 2) {
      systems.shift()
    }
    systems[i].run();
    systems[i].addParticle();
  }
}

  // textSize(50)
  // text(messages[j], width/2,height/2)
  // drawSquares(squares)
}

function moveSquare() {
  this.initX = mouseX
  this.initY = mouseY
    this.y+=this.velocityY
    this.x+=this.velocityX
    if(this.y+20>480 || this.y<0) {
      this.velocityY=-this.velocityY
    }
    if(this.x+20>480 || this.x<0) {
      this.velocityX=-this.velocityX
    }
    this.life -= 1
    if(this.life < 0) {
      this.x = this.initX
      this.y = this.initY
      this.life = this.initLife
    }
}

function drawSelf() {
    fill(this.value, 0, 0, map(this.life, 200,0,255,0))
    rect(this.x,this.y,5)
}
let x = 0
function drawSquares(squares) {
  noStroke()
  squares[x%squares.length].x = mouseX
  squares[x%squares.length].y = mouseY
  x++
  for(let i = 0; i < squares.length; i++) {
    squares[i].drawSelf()
    // squares[i].moveSquare()
    // fill(squares[i].value)
    // rect(5*i,squares[i].position,5)
    // squares[i].position+=squares[i].velocity
    // if(squares[i].position+20>480 || squares[i].position<0) {
    //   squares[i].velocity=-squares[i].velocity
    // }

    // fill(squareValue[i])
    // rect(5*i,squarePosition[i],5)
    // squarePosition[i]+=squareVelocity[i]
    // if(squarePosition[i]+20>480 || squarePosition[i]<0) {
    //   squareVelocity[i]=-squareVelocity[i]
    // }
  }
}

// Adding a star to my code. Reference: https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Adding partciles to my code. Reference: https://p5js.org/examples/simulate-particle-system.html
// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};