//https://youtu.be/CpaffE3AXJY
//No pude hacer funcionar tanto el function mousePressed como el function keyPressed
//busqué tanto en youtube como en la página oficial de p5js pero no encontré solución

let colorfondo, colorcirculos, colorcubos;
let dibujo;
let posX, posY;
let i, j;

function preload (){
  dibujo = loadImage ("data/dibujooptico.jpeg");
}

function setup (){
  createCanvas (800, 400);
  colorfondo = color (200);
  background (colorfondo);
  
}

function draw() {

  image (dibujo, 0, 0);
  print (mouseX, mouseY);
  print (keyPressed);
  translate (400, 0);

  grilla (10);
  
  }  
  
  function black ( x2){
    
    x2 = 0;
    return x2;
    
  }
  
