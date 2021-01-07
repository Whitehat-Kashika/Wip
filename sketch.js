const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, roofy;

function setup(){
    createCanvas(800, 800)
}

function draw(){
background(220);
bob1 = new Bob(700, 500, 20,);
roofy = new Roof(700, 700, 30, 200);

bob1.display();
roofy.display();
}