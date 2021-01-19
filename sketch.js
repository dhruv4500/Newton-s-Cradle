
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1, rope2,rope3,rope4,rope5;

function preload(){
	
}

function setup() {
	createCanvas(870, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(430,108,550,50);
	bobObject1=new Bob(222,523,100,100);
	bobObject2=new Bob(323,523,100,100);
	bobObject3=new Bob(424,523,100,100);
	bobObject4=new Bob(525,523,100,100);
	bobObject5=new Bob(626,523,100,100);

	rope1=new Rope(bobObject1.myObjects,roof.myObjects,-205,0);
	rope2=new Rope(bobObject2.myObjects,roof.myObjects,-104,0);
	rope3=new Rope(bobObject3.myObjects,roof.myObjects,-3,0);
	rope4=new Rope(bobObject4.myObjects,roof.myObjects,95,0);
	rope5=new Rope(bobObject5.myObjects,roof.myObjects,190,0);

	Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  console.log(mouseX+","+mouseY);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.myObjects,bobObject1.myObjects.position,{x:-90,y:-85});

	}
}




