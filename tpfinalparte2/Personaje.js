class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.piedra = new Piedra(this.posX + 32, this.posY + 20);
    this.disparar = false;
    this.contadorPiedras = 30;
    this.piedraCarga = new Piedra(random(10, 600), 420);
  }

  dibujar() {


    push();
    textSize(20);
    stroke(0);
    fill(255, 255, 0);
    text("Piedras 30/" + this.contadorPiedras, 500, 410);
    pop();

    if (this.disparar) {

      this.piedra.posY = this.piedra.posY - 8;  // mover la piedra arriba
    }

    if (this.piedra.posY < - 8) {      //si toda la piedra salio de la pantalla reincia a la posicion original y detiene la piedra
      if (this.contadorPiedras > 0) { // si hay piedras en el contador
        this.contadorPiedras = this.contadorPiedras - 1;
        this.piedra.posY = this.posY + 20;
        this.disparar = false;
      }
    }
    if (this.piedra.posY === this.posY + 20) {    // si la piedra vuelve a la posicion inicial actualiza su posicion con la del personaje
      this.actualizarPosicionpiedra();
    }


    this.piedra.dibujar();

    image(imagenes[0], this.posX, this.posY);  //personaje principal


    this.recargarPiedra();
  }

  mover(keyCode) {
    if (keyCode === LEFT_ARROW) {
      if (this.posX > 0) {
        this.posX = this.posX - 10;
      }
    } else if (keyCode === RIGHT_ARROW) {
      if (this.posX <= 576) {
        this.posX = this.posX + 10;
      }
    }
  }

  actualizarPosicionpiedra() {
    this.piedra.posX = this.posX + 32;
    this.piedra.posY = this.posY + 20;
  }

  dispararPiedra() {
    if (this.contadorPiedras > 0) {
      this.disparar = true;
      lanzamiento.play();
    }
  }

  recargarPiedra() {
    let distancia = dist(this.piedraCarga.posX, this.piedraCarga.posY, this.posX, this.posY);
    if (this.contadorPiedras < 20) {
      this.piedraCarga.piedraParacargar();
      if (distancia < 40) {
        this.piedraCarga = new Piedra(random(10, 600), 420); //actualizar posicion piedra a una posicion aleatoria
        this.contadorPiedras = 30;
        carga.play();
      }
    }
  }
}
