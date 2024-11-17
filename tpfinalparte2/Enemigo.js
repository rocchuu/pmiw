class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 1;
    this.velocidad = 0;
  }

  dibujar() {
    push();
    if (this.vida === 1) {
      imageMode(CENTER);
      image(imagenes[1], this.posX, this.posY);
      pop();
    }
  }

  mover() {

    this.posX = this.posX - 1 - this.velocidad;
  }

  reiniciarPosicion() {
    if (this.posX < 0) {
      this.posX = 650;
      this.velocidad += 0.3;
    }
  }
}
