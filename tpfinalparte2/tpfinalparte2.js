//https://youtu.be/tpcKdloCh0k

let objetoJuego;
let estado;
let imagenes = [];
let sonido;
let sonido2;
let lanzamiento;
let choque;
let carga;

function preload() {
  for (let i = 0; i < 8; i++) {
    imagenes[i] = loadImage("data/imagen"+i+".png");
  }
  soundFormats('mp3', 'ogg');
  sonido = loadSound('data/sonido.mp3');
  lanzamiento = loadSound('data/lanzamiento.mp3');
  choque = loadSound('data/choque.mp3');
  carga = loadSound('data/carga.mp3');
  sonido2 = loadSound('data/sonido2.mp3');
}
function setup() {
  createCanvas(640, 480);
  objetoJuego = new Juego();
  estado = "inicio";
}


function draw() {

  objetoJuego.tiempo();
  if (estado === "inicio") {
    background(189);

    objetoJuego.menuInicio();
  } else if (estado === "juego") {

    objetoJuego.dibujar();
  } else if (estado === "creditos") {

    objetoJuego.creditos();
  } else if (estado === "instrucciones") {

    objetoJuego.instrucciones();
  } else if (estado === "pantalla1") {

    objetoJuego.pantalla1();
  } else if (estado === "pantalla2") {

    objetoJuego.pantalla2();
  } else if (estado === "pantalla3") {
  }
}

function keyPressed() {
  objetoJuego.moverPersonaje(keyCode);
  if (estado === "juego" && keyCode == ENTER) {
    objetoJuego.dispararPiedrapersonaje();
  }
}

function mousePressed() {

  if (estado === "inicio") {
    if (objetoJuego.botonSonido.areaBoton()) {
      if (sonido.isPlaying()) {
        sonido.stop();
      } else {
        sonido.play();
        sonido.loop();
      }
    }

    if (objetoJuego.botonJugar.areaBoton()) {
      estado = "juego";
      objetoJuego.cambioTiempo();
      sonido.stop();
      sonido.play();
      sonido.loop();
    }

    if (objetoJuego.botonCreditos.areaBoton()) {
      estado = "creditos";
      sonido.stop();
      sonido.play();
    }

    if (objetoJuego.botonInstrucciones.areaBoton()) {
      estado = "instrucciones";
      sonido.stop();
      sonido.play();
      sonido.loop();
    }
  }

  if (estado === "creditos") {

    if (objetoJuego.botonAtras.areaBoton()) {
      estado = "inicio";
      sonido.stop();
      sonido.play();
    }
  }

  if (estado === "instrucciones") {
    if (objetoJuego.botonAtras.areaBoton()) {
      estado = "inicio";
      sonido.stop();
      sonido.play();
    }
  }

  if (estado === "pantalla1") {
    if (objetoJuego.botonReiniciar.areaBoton()) {
      objetoJuego.reiniciarJuego();
      estado = "inicio";
      sonido.stop();
      sonido.play();
    }
  }

  if (estado === "pantalla2") {
    if (objetoJuego.botonReiniciar.areaBoton()) {
      objetoJuego.reiniciarJuego();
      estado = "inicio";
      sonido.stop();
      sonido.play();
    }
  }
}
