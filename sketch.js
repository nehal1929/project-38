var spaceship,spaceshipImage;
var backGround,backgroundImage;
var stone,stoneImage,stoneGroup;
var score;


function preload(){
  
spaceshipImage=loadImage("unnamed.png")
backgroundImage= loadImage("bg.png") 
stoneImage=loadImage("sstone.png")  

  
}

function setup(){

canvas = createCanvas(displayWidth - 20, displayHeight-30);



image(backgroundImage, 0,-displayHeight*4,displayWidth, displayHeight*5);


//backGround= createSprite(300,300);
//backGround.addImage("building",backgroundImage);
//backGround.velocityY=-1;  

spaceship = createSprite(300,300);
spaceship.addImage("galaxy",spaceshipImage);
spaceship.scale=0.3



stoneGroup= createGroup(); 
score = 0;

}

function draw(){

// background("purple");
background(rgb(198,135,103));
background(backgroundImage)

//if (backGround.y > 300){
//backGround.y = backGround.height/2;
//} 
    
spawnStone();

if (keyDown("UP_ARROW")) {
    spaceship.velocityX = 0;
    spaceship.velocityY = -3;
     }
  if (keyDown("DOWN_ARROW")) {
    spaceship.velocityX = 0;
    spaceship.velocityY = 3;
    }
  if (keyDown("RIGHT_ARROW")) {
    spaceship.velocityX = 3;
    spaceship.velocityY = 0;
     }
  if (keyDown("LEFT_ARROW")) {
    spaceship.velocityX = -3;
    spaceship.velocityY = 0;
   }

  if (stoneGroup.isTouching(spaceship)){

    stroke(0);
    fill("pink");
    textSize(24);
    text("Game over",displayWidth/2 - 50, 0);
    stone.setVelocity(0,0);
   // stone.destroyEach();
    spaceship.destroyEach();
    
   
    
  

  }





drawSprites();
}

function spawnStone(){

if (frameCount % 300 === 0){

stone=createSprite(300,-3,20,50);
stone.addImage(stoneImage);
stone.velocityY=1; 
stone.x=Math.round(random(100,1000));  
stone.scale=0.3;

stoneGroup.add(stone);

}




}