//diagrama de flujo a modo de pdf en la carpeta data
//https://youtu.be/nnLLvS7ZrLw

textosBotones = ["comenzar", "creditos", "atras", "sonido\non/off", "reiniciar"];
textoDecisiones = ["Contarselo a tu hermana", "Confrontar al novio directamente", "Logras convencerla", "No logras convencerla", "Intentar razonar con ellos", "pelear contra ellos", "Luchan con todas sus fuerzas", "Luchan estrategicamente", "Luchar con todas tus fuerzas", "Luchar estrategicamente"];
textoCreditos = [ "Autores", "Natanael Benjamin Cruz  121121/1", "Rocio Alonso  120275/6" ];
let imagenes = [];
let estado;
let sonido;
let tiempoActual = 0;
let marcaTiempo = 0;
let tiempoTotal = 0;
let textosTXT;

function preload() {
  for (let i = 0; i < 15; i++) {
    imagenes[i] = loadImage("data/imagen"+i+".jpg");
    soundFormats('mp3', 'ogg');
    sonido = loadSound('data/sonido.mp3');
    textosTXT = loadStrings('data/textos.txt');
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 15; i++) {
    imagenes[i].resize(640, 480);
  }
  estado = "inicio";
  textSize(20);
}


function draw() {
  tiempoTotal = int(millis()/1000);
  tiempoActual = tiempoTotal - marcaTiempo;

  if (estado === "inicio") {
    image(imagenes[0], 0, 0, 640, 480);

    //botones inicio
    botonDibujar(150, 300, 150, 50);
    textSize(20);
    fill(0);
    text(textosBotones[0], 180, 330);
    //boton creditos
    botonDibujar(340, 300, 150, 50);
    fill(0);
    text(textosBotones[1], 380, 330);
    //boton sonido
    botonDibujar(20, 400, 50, 50);
    textSize(12);
    fill(0);
    text(textosBotones[3], 28, 420);
  } else if (estado === "creditos") {
    background(0);
    botonDibujar(20, 20, 100, 40);
    textSize(20);
    fill(0);
    text(textosBotones[2], 45, 45);
    textSize(25);
    fill(255);
    text(textoCreditos[0], 250, 100);
    text(textoCreditos[1], 150, 150);
    text(textoCreditos[2], 150, 190);
  } else if (estado === "pantalla1") {
    image(imagenes[1], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);

    dialogosTXT(30, 392, 0);

    if (tiempoActual >= 8) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 1);
    }
    if (tiempoActual >= 16) {
      estado = "pantalla2";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla2") {
    image(imagenes[2], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 2);

    if (tiempoActual >= 8) {
      estado = "pantalla3";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla3") {
    image(imagenes[3], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 3);

    if (tiempoActual >= 8) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 4);
    }
    if (tiempoActual >= 16) {
      estado = "pantalla4";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla4") {
    image(imagenes[0], 0, 0, 640, 480);
    botonDibujar(200, 200, 240, 50);     //contarselo a tu hermana
    textSize(15);
    fill(0);
    text(textoDecisiones[0], 238, 230);
    botonDibujar(200, 280, 240, 50);    //confrontar al novio directamente
    textSize(15);
    fill(0);
    text(textoDecisiones[1], 210, 308);
  } else if (estado === "pantalla5") {
    image(imagenes[4], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 5);

    if (tiempoActual >= 8) {
      estado = "pantalla6";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla6") {
    image(imagenes[0], 0, 0, 640, 480);
    botonDibujar(200, 200, 240, 50);    //logras convencerla
    textSize(15);
    fill(0);
    text(textoDecisiones[2], 250, 230);
    botonDibujar(200, 280, 240, 50);    //no logras convencerla
    textSize(15);
    fill(0);
    text(textoDecisiones[3], 245, 309);
  } else if (estado === "pantalla7") {
    image(imagenes[5], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 6);

    if (tiempoActual >= 5) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 7);
    }

    if (tiempoActual >= 10) {
      estado = "pantalla8";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla8") {
    image(imagenes[7], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 8);

    if (tiempoActual >= 8) {
      estado = "pantalla9";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla9") {
    image(imagenes[8], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 9);

    if (tiempoActual >= 5) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 10);
    }

    if (tiempoActual >= 12) {
      estado = "pantalla10";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla10") {
    image(imagenes[0], 0, 0, 640, 480);
    botonDibujar(200, 200, 240, 50);     //intentar razonar con ellos
    textSize(15);
    fill(0);
    text(textoDecisiones[4], 235, 230);
    botonDibujar(200, 280, 240, 50);     // pelear contra ellos
    textSize(15);
    fill(0);
    text(textoDecisiones[5], 255, 309);
  } else if (estado === "pantalla11") {  //final alternativo
    image(imagenes[9], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 11);

    if (tiempoActual >= 6) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 12);
    }
    if (tiempoActual >= 12) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 13);
    }

    if (tiempoActual >= 18) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 14);
    }

    if (tiempoActual >= 22) {
      botonDibujar(550, 435, 80, 40); //reiniciar
      textSize(18);
      fill(0);
      text(textosBotones[4], 558, 460);
    }
  } else if (estado === "pantalla12") {
    image(imagenes[10], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 15);

    if (tiempoActual >= 6) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 16);
    }
    if (tiempoActual >= 11) {
      estado = "pantalla13";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla13") {
    image(imagenes[0], 0, 0, 640, 480);
    botonDibujar(200, 200, 240, 50);      //luchan con todas sus fuerzas
    textSize(15);
    fill(0);
    text(textoDecisiones[6], 220, 230);
    botonDibujar(200, 280, 240, 50);      // luchan estrategicamente
    textSize(15);
    fill(0);
    text(textoDecisiones[7], 235, 309);
  } else if (estado === "pantalla14") {   //final malo
    image(imagenes[11], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 17);

    if (tiempoActual >= 5) {
      botonDibujar(550, 435, 80, 40);     //reiniciar
      textSize(18);
      fill(0);
      text(textosBotones[4], 558, 460);
    }
  } else if (estado === "pantalla15") {    //final bueno
    image(imagenes[12], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 18);

    if (tiempoActual >= 6) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 19);
    }

    if (tiempoActual >= 10) {
      botonDibujar(550, 435, 80, 40);     //reiniciar
      textSize(18);
      fill(0);
      text(textosBotones[4], 558, 460);
    }
  } else if (estado === "pantalla16") {
    image(imagenes[13], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 20);

    if (tiempoActual >= 5) {
      estado = "pantalla17";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla17") {
    image(imagenes[14], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 21);

    if (tiempoActual >= 5) {
      estado = "pantalla18";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla18") {
    image(imagenes[8], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 9);

    if (tiempoActual >= 4) {
      rectanguloDialogos(20, 370, 600, 100);
      dialogosTXT(30, 392, 22);
    }

    if (tiempoActual >= 10) {
      estado = "pantalla19";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla19") {
    image(imagenes[10], 0, 0, 640, 480);
    rectanguloDialogos(20, 370, 600, 100);
    dialogosTXT(30, 392, 23);

    if (tiempoActual >= 7) {
      estado = "pantalla20";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla20") {
    image(imagenes[0], 0, 0, 640, 480);
    botonDibujar(200, 200, 240, 50);     //luchar con todas tus fuerzas
    textSize(15);
    fill(0);
    text(textoDecisiones[8], 220, 230);
    botonDibujar(200, 280, 240, 50);     // luchar estrategicamente
    textSize(15);
    fill(0);
    text(textoDecisiones[9], 235, 309);
  }
}



function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(20, 400, 50, 50)) {
      if (sonido.isPlaying()) {
        sonido.stop();
      } else {
        sonido.play();
        sonido.loop();
      }
    }

    if (detectarBoton(150, 300, 150, 50)) { //boton comenzar
      estado = "pantalla1"
        marcaTiempo = tiempoTotal;
      sonido.stop();
    }
    if (detectarBoton(340, 300, 150, 50)) {
      estado = "creditos"
        sonido.stop();
      sonido.play();
    }
  } else if (estado === "creditos") {
    if (detectarBoton(20, 20, 100, 40)) {
      estado = "inicio"
        sonido.stop();
    }
  } else if (estado === "pantalla4") {
    if (detectarBoton(200, 200, 240, 50)) {
      estado = "pantalla5"
        marcaTiempo = tiempoTotal;
    }
    if (detectarBoton(200, 280, 240, 50)) { //confrontar al novio directamente
      estado = "pantalla17";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla6") {
    if (detectarBoton(200, 200, 240, 50)) { //logras convencerla
      estado = "pantalla7"
        marcaTiempo = tiempoTotal;
    }

    if (detectarBoton(200, 280, 240, 50)) { //no logras convencerla
      estado = "pantalla16";
      marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla10") {
    if (detectarBoton(200, 200, 240, 50)) { //intentar razonar con ellos
      estado = "pantalla11"
        marcaTiempo = tiempoTotal;
    }
    if (detectarBoton(200, 280, 240, 50)) { // pelear contra ellos
      estado = "pantalla12"
        marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla13") {
    if (detectarBoton(200, 200, 240, 50)) { //luchan con todas sus fuerzas
      estado = "pantalla14"
        marcaTiempo = tiempoTotal;
    }

    if (detectarBoton(200, 280, 240, 50)) { //luchan estrategicamente
      estado = "pantalla15"
        marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla20") {
    if (detectarBoton(200, 200, 240, 50)) { //luchar con todas tus fuerzas
      estado = "pantalla14"
        marcaTiempo = tiempoTotal;
    }

    if (detectarBoton(200, 280, 240, 50)) { //luchar estrategicamente
      estado = "pantalla15"
        marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla11") {

    if (detectarBoton(550, 435, 80, 40)) { //reiniciar
      estado = "inicio"
        marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla14") {
    if (detectarBoton(550, 435, 80, 40)) { //reiniciar
      estado = "inicio"
        marcaTiempo = tiempoTotal;
    }
  } else if (estado === "pantalla15") {

    if (detectarBoton(550, 435, 80, 40)) { //reiniciar
      estado = "inicio"
        marcaTiempo = tiempoTotal;
    }
  }
}
