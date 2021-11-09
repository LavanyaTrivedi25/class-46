var newX = 500

function preload(){
birdImage = loadImage("bird.png")
obstacle1Image = loadImage("building 1.png")
obstacle2Image = loadImage("building 2.png")
aeroplaneImg = loadImage("aeroplane.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight);

 aeroplane = new Aeroplane()
obstacleGroup = new Group()

  for(var i = 0; i < 25; i++){
    obstacles = new Obstacle(newX)
    obstacleGroup.add(obstacles.body)
    newX += 500
  }
  bird = new Bird()

}

function draw() {
  background("black");  

bird.body.velocityY += 0.5

bird.body.collide(obstacleGroup)

camera.position.x = bird.body.x

  if(keyDown (RIGHT_ARROW)){
    bird.body.x += 5
  }

  if(keyDown (LEFT_ARROW)){
    bird.body.x -= 5
  }

  if(keyDown("space")){
    bird.body.velocityY = -12
  }

  drawSprites();
}

