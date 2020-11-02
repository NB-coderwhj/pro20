var speed, weight, thickness;
var bullet, wall;

function setup() {
  createCanvas(800,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,85))
  bullet = createSprite(100, 200, 50, 50);
  bullet.velocityX = speed/10;
  bullet.shapeColor = "white";
  wall = createSprite(700, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80)

  console.log(speed)
  console.log(weight)
  console.log(thickness)

}

function draw() {
  background("pink");  
  drawSprites();


  if(wall.x - bullet.x < (wall.width+bullet.width)/2){
    bullet.velocityX = 0;
    var damage = (weight*speed*speed*0.5)/(thickness*thickness*thickness);
    console.log(damage)

    if(damage === 10 ||   damage > 10){
      bullet.shapeColor = "red"
    }else if(damage < 10){
      bullet.shapeColor = "green"
    }

  }
}


