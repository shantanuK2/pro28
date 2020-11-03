
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, boy, treeimg, boyimg;
function preload() {
	treeimg = loadImage("images/tree.png")
	boyimg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	mango = new Mango(500, 250, 50)
	Stone = new stone(70, 500, 30)
rope = new attach(Stone.body,{x:60,y:450})
	//Create the Bodies Here

	var boy = createSprite(100, 430, 10, 10)
	boy.scale = 0.1
	boy.addImage(boyimg)
	var tree = createSprite(600, 250, 10, 10)
	tree.addImage(treeimg)
	tree.scale = 0.45



}
function detectcollision(bodyA, bodyB) {
	mangoBodyPosition = bodyA.Body.position
	stoneBodyPosition = bodyB.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= bodyA.r + bodyB.r) {
		Matter.Body.setStatic(bodyA.body, false);

	}
}

function draw() {
	rectMode(CENTER);
	background("white");
	mango.display()
	Stone.display()
rope.display()
	drawSprites();

}
function mouseDragged() {

	Matter.Body.setPosition(Stone.body, { x: mouseX, y: mouseY });

}


function mouseReleased() {
	rope.fly();

}

function keyPressed() {
	if (keyCode === 32) {
		rope.attach(Stone.body);
	}
}



