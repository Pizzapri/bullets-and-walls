
var bullet,wall;
var speed,thickness,weight;


function setup() {
  createCanvas(1000,400);

  bullet=createSprite(50, 200,50,10);
  
  wall=createSprite(900,200,thickness,height/2);
}

function draw() {
  background("black");  

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  
  if(keyDown("space")){
    bullet.velocityX=speed;
  }

  if(collide(bullet,wall)){
    bullet.velocityX=0;
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor="red";
    }
    else if(damage<10){
      wall.shapeColor="green";
    }
  }

  drawSprites();
}
function collide(b,w){
   bulletRightEdge=b.x+b.width;
   wallLeftEdge=w.x;

   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   else{
     return false;
   }
    
}