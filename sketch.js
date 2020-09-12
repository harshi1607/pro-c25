var paper,dustbin1,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,height-30,30)
	dustbin1=new Dustbin(1000,height-40,200,20)
	ground = Bodies.rectangle(width/2, height-10, width, 20, {isStatic:true} );
	World.add(world, ground);
	
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Engine.update(engine);
  
 paper.display();
 dustbin1.display()
 
 fill("pink")
 rect(ground.position.x,ground.position.y,1200,20)
}

function keyPressed(){
	console.log("abc")
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:200})
	}
}

