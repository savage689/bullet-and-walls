var thickness,wall;
var bullet,speed,weight;

function setup() {
  canvas = createCanvas(1600,400);
 thickness = random(22,83);
 wall = createSprite(1200 ,200, thickness, height/2);
 bullet = createSprite(50,200,20,20);
 speed = random(223,321);
 bullet.velocityX = speed;
 weight = random(30,52);
 bullet.shapeColor = "white";
  
}

function draw() {
  background("black");  
  drawSprites();

  if(hasCollided(bullet, wall)){
bullet.velocityX=0;
var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);


if(damage>10){

wall.shapeColor = color(255,0,0);


}

if(damage<10){

wall.shapeColor = color(0,255,0);


}



  }
  
 
}

function hasCollided(lbullet, lwall){

bulletRightEdge =lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){

return true

}
return false;

}

