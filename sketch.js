const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight=300;

var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;
	

	ground= new Ground(240,795,480,10);
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for(var k=0; k<=width; k=k+80){
	  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40; j<=width; j=j+50){
	  plinkos.push(new Plinko(j,75));
  }
  for(var j=15; j<=width; j=j+50){
	plinkos.push(new Plinko(j,175));
}

	if(frameCount%60===0){
		particles.push(new Particle(random(width/2-10, width/2+10),10,10));
	}

	for(var j=0; j<particles.length; j++){
		particles[j].display();
	}
	for(var k=0; k<divisions.length; k++){
		divisions[k].display();
	}
	for(var l=0; l<plinkos.length; l++){
		plinkos[l].display();
	}

  ground.display();

  

  drawSprites();
 
}




