var gameState = 0, playerCount;
var database;
var form, player, game;
var allPlayers;
var p1,p2,p3,p4;
var players;
var blue,red,grey,pink;
var obstacle1;
var bgImage;

function preload() {
  blue = loadAnimation("animations/blue1.png","animations/blue2.png","animations/blue3.png","animations/blue4.png","animations/blue5.png");
  red = loadAnimation("animations/red1.png","animations/red2.png","animations/red3.png","animations/red4.png","animations/red5.png");
  grey = loadAnimation("animations/grey1.png","animations/grey2.png","animations/grey3.png","animations/grey4.png","animations/grey5.png");
  pink = loadAnimation("animations/pink1.png","animations/pink2.png","animations/pink3.png", "animations/pink4.png","animations/pink5.png")
  bgImage = loadImage("animations/spacebackground.jpeg");
}

function setup() {
  createCanvas(displayWidth - 20, displayWidth - 30);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();
}

function draw() {
  //console.log(playerCount);
  if (playerCount === 4) {
    game.updateGameState(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  } 

  //edges = createEdgeSprites();    
  //obstacle1.bounceOff(edges); 
}