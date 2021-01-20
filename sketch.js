const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var rope1,rope2,rope3,rope4,rope5;
//var world;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(390,130,360,40)

	bobObject1 = new bob(250,500,35);
	bobObject2 = new bob(320,500,35);
	bobObject3 = new bob(390,500,35);
	bobObject4 = new bob(460,500,35);
	bobObject5 = new bob(530,500,35);

	/*var render = Render.create({
		elemnt: document.body,
		engine:engine,
	  options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
  }
})*/

	rope1 = new rope(bobObject1.body, roofObject.body, -35*4,0);
	rope2 = new rope(bobObject2.body, roofObject.body, -35*2,0);
	rope3 = new rope(bobObject3.body, roofObject.body, -35*0,0);
	rope4 = new rope(bobObject4.body, roofObject.body, -35*-2,0);
	rope5 = new rope(bobObject5.body, roofObject.body, -35*-4,0);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(232, 218, 239);
  
	Engine.update(engine);

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roofObject.display();
	
	drawSprites();
	textSize(16);
	fill(0,255,255);
	//fill(128 + sin(frameCount*0.1) * 128);
 // if (mouseIsPressed) {
    stroke(255);
 // }
  //else {
    //noStroke();
  //}
	text("Press Up Arrow to Play",316,135);
  }

 function keyPressed() {
	
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject5.body.position,{x:-115,y:150});
		
  	}
}











