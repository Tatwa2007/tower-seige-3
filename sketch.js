const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//var gameState = "on sling"
//var bg ="sprite/bg2.png";
var score = 0;

/*function preload() {
    getBackgroundImg(); 
}*/

function setup(){
   
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2, height,width,20);
   // platform = new Ground(150, 505, 300, 170);

    box1 = new Box(width-width/3,100,height/10,height/10);
    box2 = new Box(width-width/3,100,height/10,height/10);
    box3 = new Box(width-width/3,100,height/10,height/10);
    box4 = new Box(width-width/3,100,height/10,height/10);
    box5 = new Box(width-width/3,100,height/10,height/10);
    box13 = new Box(width-width/3,100,height/10,height/10);
    box14 = new Box(width-width/3,100,height/10,height/10);

    box6 = new Box(width-width/3+height/10,100,height/10,height/10);
    box7 = new Box(width-width/3+height/10,100,height/10,height/10);
    box8 = new Box(width-width/3+height/10,100,height/10,height/10);
    box9 = new Box(width-width/3+height/10,100,height/10,height/10);
    box10 = new Box(width-width/3+height/10,100,height/10,height/10);
    box11 = new Box(width-width/3+height/10,100,height/10,height/10);
    box12 = new Box(width-width/3+height/10,100,height/10,height/10);

    box15 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box16 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box17 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box18= new Box(width-width/3+2*height/10,100,height/10,height/10);
    box19 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box20 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box21 = new Box(width-width/3+2*height/10,100,height/10,height/10);

    ball1 = new ball(height-height/10, height/2,height/5);
    rope1 = new rope (ball1.body,{x:height-height/10, y:20});
  
     //slingshot = new SlingShot(bird.body,{x:200, y:250});
  
}



function draw(){
   // if(backgroundImg){
    background(0);
    textSize(width/60);
    text ("Score:"+score,1100,150);

    //}

    Engine.update(engine);
    ground.display();
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
   // box1.score();

   // rope1.display();
    ball1.display();
   
    //slingshot.display(); 

}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}

