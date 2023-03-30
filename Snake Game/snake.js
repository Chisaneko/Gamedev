let domReplay = document.querySelector('#replay');
let domScore =  document.querySelector('#score');
let domCanvasGame = document.createElement("canvas");
 
document.querySelector("#canvas").appendChild(domCanvasGame);

let ctx = domCanvasGame.getContext("2d");

const W = (domCanvasGame.width = 400);
const H = (domCanvasGame.height = 400);

let snake,
food,
currentHue,
cells = 20,
cellSize,
isGameOver = false,
tails = [],
Score = 00,
maxScore = undefined,
particles = [],
splashParticleCount = 20,
cellsCount,
requestID;

