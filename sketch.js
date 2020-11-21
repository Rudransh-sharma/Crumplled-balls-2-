
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , ball , dustbin ; 
var paper ;
function preload(){


} 
function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600 , 800 , 160000 , 50 )

paper = new Paper( 190, 780 , 70 ,50)

dustbin = new Dustbin(1200 , 600 , 50 , 50)

Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
 
ground.display();
dustbin.display();
paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:225 , y: -225});
	
	}
	}

