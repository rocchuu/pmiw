class Boton {
  constructor(posX, posY, ancho, alto, num, x, y, tam) {
    this.posX = posX;
    this.posY = posY;
    this.anch = ancho;
    this.alto = alto;
    this.text = ["Instrucciones", "Creditos", "Jugar", "atras", "sonido\non/off", "Reiniciar"];
    this.num = num;
    this.tam = tam;
    this.x = x;
    this.y = y;
  }

  botonPantalla() {

    if (this.areaBoton()) {
      fill(175);
    } else {
      fill(255);
    }

    textSize(this.tam);
    rect(this.posX, this.posY, this.anch, this.alto);
    fill(0);
    text(this.text[this.num], this.x, this.y);
  }

  areaBoton() {
    return mouseX > this.posX && mouseX < this.posX + this.anch && mouseY > this.posY && mouseY < this.posY + this.alto;
  }
}
