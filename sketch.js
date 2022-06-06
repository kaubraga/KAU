
let larguraTela = 600;
let comprimentoTela = 800;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let diametroBolinha = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha/2;

let comprimentoRaquete = 80;
let larguraRaquete = 15;
let xMinhaRaquete = 15;
let yRaquete = 300;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(150);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaMinhaRaquete();
  moveMinhaRaquete();
}

function criaBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colideBolinha(){
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha  - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
 
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
    }
}

function criaMinhaRaquete(){
  rect(xMinhaRaquete, yRaquete, larguraRaquete, comprimentoRaquete);
}

function moveMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
    