
var trex ,trex_running;

function preload(){
  

}

function setup(){
  createCanvas(800,500)
  
  //create a trex sprite
 
  trex =  createSprite(50, 150, 30, 40)

}

function draw(){
  background("green")
  
  drawSprites();

}
