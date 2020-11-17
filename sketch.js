var movingRect,fixedRect;
var object1, object2;

var object3;

function setup() {
  createCanvas(800,600);
  movingRect=createSprite(400,200,80,30);
  fixedRect=createSprite(200,200,50,80);

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object1.shapeColor="green";
  object2.shapeColor="green";

  object2.velocityX = 3;
  object2.velocityY= 0;
  object3 = createSprite(500,100,50,50);
  object3.shapeColor = "pink";
  object3.velocityX = -3;
  object3.velocityY = 0;

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

//change color of movingRect and object1 if they are touching eachother
if (isTouching(movingRect, object1))
  {
    movingRect.shapeColor="red";
    object1.shapeColor="red";
  }

  else 
  {
    movingRect.shapeColor="green";
    object1.shapeColor="green";
  }

   // make object3 bounce off object2
   bounceOff(object2, object3);
  drawSprites();
}


