const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImg = loadImage("./assets/base.png");
  playerImg = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  player = Bodies.rectangle(100,200,75,100);
  World.add(world, player);
  //criar corpo do jogador
  playerArcher = Bodies.rectangle(11,230,75,150);
  World.add(world, playerArcher);
  playerBase = Bodies.rectangle(90,340,100,100);
  World.add(world, playerBase);

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
image(playerArcherImg,110,230,75,150)
  //exibir a imagem da base do jogador usando a função image()
image(playerImg,100,200,75,150)
image(baseImg,90,340,100,100)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
