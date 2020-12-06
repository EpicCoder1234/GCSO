var car,wall;
var weight,speed;
var deformation;

function setup() { 
  createCanvas(800,400); 
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50); 
  wall = createSprite(700,200,60,height/2);
  
  car.shapeColor='white'; 
  wall.shapeColor='blue';
  deformation = 0.5*weight*speed*speed/22500;
  
} 
function draw() { 
  car.velocityX = speed;
  car.depth = wall.depth+1
  background('black'); 
  //if((movingRect.width/2+fixedRect.width/2 >= movingRect.x-fixedRect.x)&& (movingRect.width/2+fixedRect.width/2 >= fixedRect.x-movingRect.x)) 
  if((car.width/2+wall.width/2 >= Math.abs(car.x-wall.x))&&
  (car.height/2+wall.height/2 >=Math.abs(car.y-wall.y))) { 
    car.velocityX = 0;
    if(deformation<100){
      car.shapeColor = "green";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor = "yellow"
    }
    if(deformation>180){
      car.shapeColor = "red";
    }
  }
  drawSprites(); 
}