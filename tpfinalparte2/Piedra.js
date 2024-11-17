class Piedra {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar() {
    push();
    fill(140);
    ellipse(this.posX, this.posY, 20, 20);
    pop();
  }

  piedraParacargar() {
    image(imagenes[2], this.posX, this.posY);
  }
}
