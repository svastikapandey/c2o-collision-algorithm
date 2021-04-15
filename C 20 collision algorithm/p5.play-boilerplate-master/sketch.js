var movingRect , fixedRect;
function setup() {
  createCanvas(800,1200);
  fixedRect= createSprite(200, 400, 50, 100);
  fixedRect.shapeColor="blue";

  movingRect= createSprite(400, 400, 100, 50);
  movingRect.shapeColor="blue";
}

function draw() {
  background("black"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.width/2+ fixedRect.width/2>movingRect.x-fixedRect.x &&
    movingRect.width/2+ fixedRect.width/2>fixedRect.x-movingRect.x &&

    movingRect.height/2+ fixedRect.height/2>movingRect.y-fixedRect.y &&
    movingRect.height/2+ fixedRect.height/2>fixedRect.y-movingRect.y){

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  drawSprites();
}