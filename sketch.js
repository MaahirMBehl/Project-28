
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boy=loadImage("boy.png");
tree=loadImage("tree.png");	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(width/2,600,width,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);
image(boy,200,340,200,300);
image(tree,1050,580,300,400); 
}



