//declaring the variables
var player,playerImg;
var ground,groundImg;
var coin,coinImg;
var car,carImg;
var bird,birdImg;
var desert,desertImg;
var bottle,bottleImg;
var fire,fireImg;
var cactus,cactusImg;
var jungle,jungleImg;
var banana,bananaImg;
var apple,appleImg;
var wm, wmImg;
var arrow,arrowImg;
var tiger,tigerImg;
var sea,seaImg;
var crab,crabImg;
var ice,iceImg;
var juice,juiceImg;
var invsGround,invsGround2,invsGround3,invsGround4;
var over,overImg;
var start,startImg;
var gameSound;
var PLAY= 1;
var END= 0;
var gameState= 1;
var score= 0;


function preload(){

  playerImg= loadImage("Mario.gif");
  groundImg= loadImage("ground.jpg");
  coinImg= loadImage("coin.png");
  carImg= loadImage("car.png");
  birdImg= loadImage("bird.gif");
  desertImg= loadImage("desert.jpg");
  bottleImg= loadImage("bottle.png");
  cactusImg= loadImage("cactus.png");
  fireImg= loadImage("fire.png");
  jungleImg= loadImage("jungle.jpg");
  bananaImg= loadImage("banana.png");
  appleImg= loadImage("apple.png");
  wmImg= loadImage("wm.png");
  arrowImg= loadImage("arrow.png");
  tigerImg= loadImage("tiger.png");
  seaImg= loadImage("sea.jpg");
  crabImg= loadImage("crab.png");
  iceImg= loadImage("ice.png");
  juiceImg= loadImage("juice.png");
  overImg= loadImage("download.jpg");
  startImg= loadImage("start.jpg");
  gameSound= loadSound("game.mp3");
}

function setup() {
 createCanvas(500,500);
  
  gameSound.play();

  //creating ground sprite
  ground= createSprite(250,250,500,500);
  ground.addImage(groundImg);
  ground.scale= 1;
  ground.velocityX= -2;
  ground.x= ground.width/2;
  
  //creating desert sprite
  desert= createSprite(250,250,1000,1000);
  desert.addImage(desertImg);
  desert.scale= 5;
  desert.velocityX= -2;
  desert.visible= false;
  desert.x= desert.width/2;
  
  //creating jungle sprite
  jungle= createSprite(250,250);
  jungle.addImage(jungleImg);
  jungle.velocityX= -2;
  jungle.x= jungle.width/2;
  jungle.visible= false;
   
  //creating sea sprite
  sea= createSprite(250,250,500,500);
  sea.addImage(seaImg);
  sea.scale= 3.5;
  sea.velocityX= -2;
  sea.x= sea.width/2;
  sea.visible= false;
  
  //creating game over sprite
  over= createSprite(40,280,500,500);
  over.addImage(overImg);
  over.scale= 2.5;
  over.visible= false;
  
  //creating start sprite
  start= createSprite(40,280,500,500);
  start.addImage(startImg);
  start.scale= 2.5;
  start.visible= false;
  
  //creating player sprite
  player= createSprite(50,350);
  player.addImage(playerImg);
  player.scale= 0.3;
  camera.x= player.x;
  camera.y= player.y;
  
  //creating invisible ground sprite 1
  invsGround = createSprite(50,440,400,10);
  invsGround.visible = false;
  invsGround.x= invsGround.width/2;
  
  //creating invisible ground sprite 2
  invsGround2 = createSprite(250,10,400,10);
  invsGround2.visible= false;
  invsGround2.x= invsGround2.width/2;
  
  //creating invisible ground sprite 3
  invsGround3 = createSprite(490,250,10,500);
  invsGround3.visible= false;
  
  //creating invisible ground sprite 4
  invsGround4 = createSprite(15,250,10,500);
  invsGround4.visible= false;
  
  //creating groups
  coinGroup= new Group ();
  carGroup= new Group ();
  birdGroup= new Group();
  bottleGroup= new Group();
  cactusGroup= new Group ();
  fireGroup= new Group();
  fruitGroup= new Group();
  tigerGroup= new Group();
  arrowGroup= new Group();
  crabGroup= new Group();
  iceGroup= new Group();
  juiceGroup= new Group();
  
} 

function draw() {
  
    //if gameState= play,do the following
    if(gameState===PLAY){
        coins();
        cars();
        birds();

    //if ground crosses boundary reset it
    if(ground.x<0){
       ground.x= ground.width/2;
     }
       
    //if player touches coin group, give 2p and destroy all
    if(player.isTouching(coinGroup)){
       score= score+2;
       coinGroup.destroyEach();
    }
    
    //after 1000 frames do the following
    if(frameCount>2000){
      ground.destroy();
      desert.visible= true;
      bottles();
      obs();
      fire();
      carGroup.destroyEach();
      coinGroup.destroyEach();
      birdGroup.destroyEach();
      
    //if player touches bottle group, give 2p and destroy all
    if(player.isTouching(bottleGroup)){
      score= score+2;
      bottleGroup.destroyEach();
     }

    //if desert crosses boundary reset it
    if(desert.x<0){
      desert.x= desert.width/2;
     }
   }
    
    //after 4000 frames do the following
    if(frameCount>4000){
      ground.destroy();
      desert.destroy();
      jungle.visible= true;
      fruits();
      arrows();
      tigers();
      carGroup.destroyEach();
      coinGroup.destroyEach();
      birdGroup.destroyEach();
      bottleGroup.destroyEach();
      cactusGroup.destroyEach();
      fireGroup.destroyEach();
      
    //if player touches fruit group, give 2p and destroy all
    if(player.isTouching(fruitGroup)){
       score= score+2;
       fruitGroup.destroyEach();
     }

    //if jungle crosses boundary reset it
    if(jungle.x<0){
       jungle.x= jungle.width/2;
     }
   }
    
    //after 4000 frames do the following
    if(frameCount>6000){
      ground.destroy();
      desert.destroy();
      jungle.destroy();
      sea.visible= true;
      iceBalls();
      crabs();
      juices();
      
      //if player touches juice group, give 2p and destroy all
      if(player.isTouching(juiceGroup)){
        score= score+2;
        juiceGroup.destroyEach();
      }

      //colliding player with invisible grounds
      player.collide(invsGround3);
      player.collide(invsGround4);

      //destroying respective groups
      fruitGroup.destroyEach();
      arrowGroup.destroyEach();
      tigerGroup.destroyEach();
      carGroup.destroyEach();
      coinGroup.destroyEach();
      birdGroup.destroyEach();
      bottleGroup.destroyEach();
      cactusGroup.destroyEach();
      fireGroup.destroyEach();

    //if right arrow key is pressed move player to right side
    if(keyDown("right_arrow")){
      player.x= player.x+3;
    }
      
    //if left arrow key is pressed move player to left side
    if(keyDown("left_arrow")){
      player.x= player.x-3;
    }
      
    //if sea crosses boundary reset it
    if(sea.x<0){
      sea.x= sea.width/2;
    }
  }
  
    //colliding player with invisible grounds
    player.collide(invsGround);
    player.collide(invsGround2);
    
    //resetting invisble ground if it crosses boundary
    if(invsGround.x<0){
       invsGround.x= invsGround.width/2;
    }
    
    //resetting invisble ground if it crosses boundary
    if(invsGround2.x<0){
       invsGround2.x= invsGround2.width/2;
    }
   
    //if up arrow key is pressed move player upwards
    if(keyDown("up_arrow")){
       player.y= player.y-5;
    }
    
    //if down arrow key is pressed move player downwards
    if(keyDown("down_arrow")){
       player.y= player.y+5;
    }
    
    //if player is touching any obstacle group game state should be end
    if(player.isTouching(carGroup)||
       player.isTouching(birdGroup)||
       player.isTouching(cactusGroup)||
       player.isTouching(fireGroup)||
       player.isTouching(tigerGroup)||
       player.isTouching(arrowGroup)||
       player.isTouching(crabGroup)||
       player.isTouching(iceGroup)){
        
        gameState=END;
      }
  }
  
   //if game state= end do the following
   if(gameState===END){
     
      //destroying all and playing the sound
      gameSound.stop();
      fruitGroup.destroyEach();
      arrowGroup.destroyEach();
      tigerGroup.destroyEach();
      carGroup.destroyEach();
      coinGroup.destroyEach();
      birdGroup.destroyEach();
      bottleGroup.destroyEach();
      cactusGroup.destroyEach();
      fireGroup.destroyEach();
      crabGroup.destroyEach();
      iceGroup.destroyEach();
      juiceGroup.destroyEach();
      ground.setVelocity(0);
      desert.setVelocity(0);
      jungle.setVelocity(0);
      sea.setVelocity(0);
      player.destroy();
      over.visible= true;

     
      //after 60 frames load another image
      if(frameCount%60===0){
        over.visible= false;
        start.visible= true; 
      }      
}
  
   drawSprites();
  
   //if game state=end display the score
   if(gameState==END){
     fill("yellow");
     textSize(30);
     text("YOUR SCORE:"+score,20,280);
   }

     //displaying score on upright corner
     fill("red");
     textSize(20);
     text("SCORE:"+score,375,50);
}

function coins(){
  
  if(frameCount%150===0){
  coin= createSprite(450,250);
  coin.y= Math.round(random(300,420));
  coin.addImage(coinImg);
  coin.scale= 0.06;
  coin.velocityX= -5;
  coin.lifetime= 300;
  coinGroup.add(coin);
  }
}

function cars(){
  
  if(frameCount%80===0){
    car= createSprite(450,250);
    car.y= Math.round(random(300,420));
    car.addImage(carImg);
    car.scale= 0.1;
    car.velocityX= -5;
    car.lifetime= 300;
    carGroup.add(car);
    car.setCollider("rectangle",-300,-250,10,10);
  }
}

function birds(){
  
   if(frameCount%100===0){
    bird= createSprite(450,10);
    bird.y= Math.round(random(20,200));
    bird.addImage(birdImg);
    bird.scale= 0.03;
    bird.velocityX= -2;
    bird.lifetime= 300;
    birdGroup.add(bird);
    bird.setCollider("rectangle",-100,100,10,10);
  }
}

function bottles(){
  
  if(frameCount%150===0){
    bottle= createSprite(450,10);
    bottle.y= Math.round(random(300,100));
    bottle.addImage(bottleImg);
    bottle.scale= 0.05;
    bottle.velocityX= -4;
    bottle.lifetime= 300;
    bottleGroup.add(bottle);
  }
}

function obs(){
  
  if(frameCount%80===0){
    cactus= createSprite(450,10);
    cactus.y= Math.round(random(350,400));
    cactus.addImage(cactusImg);
    cactus.scale= 0.10;
    cactus.velocityX= -4;
    cactus.lifetime= 300;
    cactusGroup.add(cactus);
  }
}

function fire(){
  
  if(frameCount%100===0){
    obs2= createSprite(450,10);
    obs2.y= Math.round(random(450,10));
    obs2.addImage(fireImg);
    obs2.scale= 0.090;
    obs2.velocityX= -4;
    obs2.lifetime= 300;
    fireGroup.add(obs2);
    obs2.setCollider("rectangle",-100,100,10,10);
  }
}

function fruits(){
  
  if(frameCount%300===0){
    
    fruit= createSprite(450,10);
    fruit.y= Math.round(random(450,10));
    fruit.velocityX= -4;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: fruit.addImage(bananaImg);
              fruit.scale= 0.70;
              break;
      case 2: fruit.addImage(bananaImg);
              fruit.scale= 0.1;
              break;
      case 3: fruit.addImage(bananaImg);
              fruit.scale= 0.1;
              break;
      default:break;
    }
    fruit.setCollider("rectangle",-200,100,10,10);
    fruitGroup.add(fruit);
    fruit.lifetime= 300;
   }
}

function arrows(){
  
  if(frameCount%100===0){
    arrow= createSprite(450,10);
    arrow.addImage(arrowImg);
    arrow.y= Math.round(random(450,10));
    arrow.scale= 0.1;
    arrow.velocityX= -4;
    arrow.lifetime= 300;
    arrowGroup.add(arrow);
  }
}

function tigers(){
  
  if(frameCount%100===0){
    tiger= createSprite(460,420);
    tiger.addImage(tigerImg);
    tiger.scale= 0.1;
    tiger.velocityX= -4;
    tiger.lifetime= 300;
    tigerGroup.add(tiger);
    tiger.setCollider("rectangle",0,100,20,20);
  }
}

function iceBalls(){
  
  if(frameCount%70===0){
    ice= createSprite(250,20);
    ice.x= Math.round(random(10,480));
    ice.addImage(iceImg);
    ice.scale= 0.070;
    ice.velocityY= 4;
    ice.lifetime= 300;
    iceGroup.add(ice);
    ice.setCollider("rectangle",-100,-100,100,100);
  }
}

function crabs(){
  
  if(frameCount%100===0){
    crab= createSprite(480,420);
    crab.x= Math.round(random(250,250));
    crab.addImage(crabImg);
    crab.scale= 0.070;
    crab.velocityX= -4;
    crab.lifetime= 300;
    crabGroup.add(crab); 
  }
}

function juices(){
  
  if(frameCount%150===0){
    juice= createSprite(450,250);
    juice.y= Math.round(random(10,470));
    juice.addImage(juiceImg);
    juice.scale= 0.1;
    juice.velocityX= -4;
    juice.lifetime= 300;
    juiceGroup.add(juice);
    juice.setCollider("rectangle",-100,100,10,10);
  }
}