//global variable
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;
var ground;

function preload(){
  //for loading animation to sprites
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,600);
  
  // creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //for creating a  ground
  ground=createSprite(0,350,1100,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  //assigning 0 to survival time
  survivalTime=0;
  
  //creating  groups
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background("white");
  
  //making the monkey collide  the ground
  monkey.collide(ground);
  
  //making scorlling effect to the ground
  if(ground.x<=0){
    ground.x=ground.width/2;
  }
  
  //making the mokey jump when space is pressed
  if(keyDown("space")&&monkey.y >= 100){
    monkey.velocityY=-12;
  }
  
  //giving gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.8
  
  //calling the function
  bananas();
  obstacles();
  
  drawSprites();
  
  //displaying survival time 
  stroke("black")
  textSize=(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time -"+survivalTime,100,50);
}

//creating function for bananas
function bananas(){
  
  //creating a local variable
  var rand=Math.round(random(120,200));
  
  //making the bananas create at random positions for every 80 frame count 
  if(frameCount%80===0){
    banana=createSprite(600,rand,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=210;
    
    //adding groups to bananas
    bananaGroup.add(banana);
  }  
}

//creating function for obstacle
function obstacles(){
  
  //making the obstacle create at random positions for every 300 frame count 
   if(frameCount%300===0){
     obstacle=createSprite(600,315,30,30);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.velocityX=-4;
     obstacle.lifetime=210;
     
     //adding groups to obstacle
     obstacleGroup.add(obstacle);
   }
}





