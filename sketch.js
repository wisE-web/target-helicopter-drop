var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rightEdge,bottomEdge,Leftedge;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bottomEdge = createSprite(370,630,300,20);
	bottomEdge.shapeColor = "red";
	rightEdge = createSprite(531,552,20,150);
	rightEdge.shapeColor = "red";
	Leftedge = createSprite(207,552,20,150);
	Leftedge.shapeColor = "red";
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-0, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  console.log(mouseY);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



