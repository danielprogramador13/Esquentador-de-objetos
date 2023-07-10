const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball1, ball2, ball3;
var blower;
var blowerMouth;
var button;
var ground;
var brick1;
var n = 0;
var y = 0;

function setup() {
  var canvas = createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  ball1 = new Ball(width / 2 + 80, height / 2 - 80, 80, 80, true);
  ball2 = new Ball(width / 3 + 80, height / 2 - 80, 100, 100, false);
  ball3 = new Ball(width / 4 + 80, height / 2 - 80, 40, 40, true);

  button = createButton("Clique para esquentar os objetos");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  ground = new Blower(250, 500, 600, 100);
  brick1 = new Blower(300, 0, 600, 100);
  brick2 = new Blower(0, 200, 100, 600);
  brick3 = new Blower(500, 200, 100, 600);

  button.mousePressed(blow);
}

function draw() {
  background("green");
  Engine.update(engine);
  if (!y > 255) {
    y = y + 0.5;
  }
  ground.show();
  brick1.show();
  brick2.show();
  brick3.show();
  ball1.show(n, y);
  ball2.show(n, y);
  ball3.show(n, y);
}

function blow() {
  if (n < 255) {
    Matter.Body.applyForce(ball1.body, { x: 0, y: 0 }, { x: 0, y: 0.09 });
    Matter.Body.applyForce(ball2.body, { x: 0, y: 0 }, { x: 0, y: 0.09 });
    Matter.Body.applyForce(ball3.body, { x: 0, y: 0 }, { x: 0, y: 0.01 });
    n++;
    if (y > 2) {
      y = y - 2;
    }
  } else {
    for (i = 0; i < 10; i++) {
      Matter.Body.applyForce(ball1.body, { x: 0, y: 0 }, { x: 0, y: 1 });
      Matter.Body.applyForce(ball2.body, { x: 0, y: 0 }, { x: 0, y: 1 });
      Matter.Body.applyForce(ball3.body, { x: 0, y: 0 }, { x: 0, y: 1 });
    }
  }
}

//Essa é uma versão obtida do jogo do soprador de canudos.
