class Juego {
  constructor() {
    this.gnomosEnemigos = [];
    for ( let i = 0; i < 6; i++) {
      this.gnomosEnemigos[i] = [];
      for ( let j = 0; j < 3; j++) {
        this.gnomosEnemigos[i][j] = new Enemigo(i*100 + 38, j*100 + 30);
      }
    }

    this.personajePrincipal = new Personaje(300, 400);
    this.contadorEnemigos = 0;

    this.botonJugar = new Boton(245, 380, 150, 50, 2, 292, 408, 20);
    this.botonCreditos = new Boton(340, 300, 150, 50, 1, 378, 330);
    this.botonInstrucciones = new Boton(150, 300, 150, 50, 0, 167, 329, 20);
    this.botonAtras = new Boton(20, 20, 100, 40, 3, 46, 44, 20);
    this.botonSonido = new Boton(20, 400, 50, 50, 4, 23, 420, 15);
    this.botonReiniciar = new Boton(245, 300, 150, 50, 5, 280, 330, 20);

    this.tiempoActual = 0;
    this.marcaTiempo = 0;
    this.tiempoTotal = 0;
    this.textoCreditos = ["Autores", "Natanael Benjamin 121121/1", "Rocio Alonso 120275/6"];
  }

  tiempo() {
    this.tiempoTotal = int(millis()/1000);
    this.tiempoActual = this.tiempoTotal - this.marcaTiempo;
  }

  dibujar() {

    image(imagenes[4], 0, 0);

    push();
    fill(255);
    textSize(20);
    stroke(0);
    text("Tiempo 120s/" + this.tiempoActual+ "s", 475, 350);
    pop();

    push();
    fill(255, 0, 0);
    textSize(20);
    stroke(0);
    text("Enemigos 18/" + this.contadorEnemigos, 490, 380);
    pop();

    if (this.tiempoActual > 120) {
      estado = "pantalla1";
      sonido.stop();
      sonido2.play();
    }

    if (this.contadorEnemigos >= 18) {
      estado = "pantalla2";
      sonido.stop();
      sonido.play();
    }

    this.personajePrincipal.dibujar();

    for ( let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        this.gnomosEnemigos[i][j].dibujar();
        this.gnomosEnemigos[i][j].mover();
        this.gnomosEnemigos[i][j].reiniciarPosicion();
      }
    }

    this.colisionPiedraenemigos();
  }

  colisionPiedraenemigos() {
    for ( let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.gnomosEnemigos[i][j].vida > 0) {  //condicional para que solo se aplique la colision a los enemigos que tiene vida

          let dis = dist(this.personajePrincipal.piedra.posX, this.personajePrincipal.piedra.posY, this.gnomosEnemigos[i][j].posX, this.gnomosEnemigos[i][j].posY);

          if (dis < 20) {

            this.gnomosEnemigos[i][j].vida = 0;
            this.personajePrincipal.piedra.posY = this.personajePrincipal.posY + 20;
            this.personajePrincipal.contadorPiedras -=1;
            this.personajePrincipal.disparar = false;
            this.contadorEnemigos +=1;
            choque.play();
          }
        }
      }
    }
  }


  menuInicio() {
    push();
    image(imagenes[3], 0, 0);
    this.botonSonido.botonPantalla();
    this.botonInstrucciones.botonPantalla();
    this.botonCreditos.botonPantalla();
    this.botonJugar.botonPantalla();
    pop();
  }

  creditos() {
    background(0);
    textSize(25);
    fill(255);
    text(this.textoCreditos[0], 250, 100);
    text(this.textoCreditos[1], 150, 150);
    text(this.textoCreditos[2], 150, 190);
    this.botonAtras.botonPantalla();
  }

  instrucciones() {
    image(imagenes[7], 0, 0);
    this.botonAtras.botonPantalla();
  }

  pantalla1() {
    image(imagenes[6], 0, 0);
    this.botonReiniciar.botonPantalla();
  }

  pantalla2() {
    image(imagenes[5], 0, 0);
    this.botonReiniciar.botonPantalla();
  }

  reiniciarJuego() {

    this.gnomosEnemigos = [];
    for ( let i = 0; i < 6; i++) {
      this.gnomosEnemigos[i] = [];
      for ( let j = 0; j < 3; j++) {
        this.gnomosEnemigos[i][j] = new Enemigo(i*100 + 38, j*100 + 30);
      }
    }

    this.personajePrincipal = new Personaje(300, 400);
    this.contadorEnemigos = 0;
    this.tiempoActual = 0;
    this.marcaTiempo = 0;
    this.tiempoTotal = 0;
  }

  cambioTiempo() {
    this.marcaTiempo = this.tiempoTotal;
  }

  moverPersonaje(keyCode) {
    this.personajePrincipal.mover(keyCode);
  }

  dispararPiedrapersonaje() {
    this.personajePrincipal.dispararPiedra();
  }
}
