function botonDibujar(posX, posY, ancho, alto) {

  if (detectarBoton(posX, posY, ancho, alto)) {
    fill(175);
  } else {
    fill(255);
  }
  rect(posX, posY, ancho, alto);
}

function detectarBoton(x, y, anch, alt) {
  return mouseX > x && mouseX < x + anch && mouseY > y && mouseY < y + alt;
}

function rectanguloDialogos(posX, posY, ancho, alto) {
  push();
  fill(227, 198, 180);
  rect(posX, posY, ancho, alto);
  pop();
}


function dialogosTXT(posX, posY, linea) {
  push();
  fill(0);
  let textoCompleto = textosTXT[linea];
  let textosDivididos = split(textoCompleto, ':' );
  textSize(20);
  text(textosDivididos[0], posX, posY);
  textSize(18);
  text(textosDivididos[1], posX, posY + 10, 600);
  pop();
}
