function grilla ( cant){
  
  for ( let i = 0; i < cant; i++){
    for ( let j = 0; j < cant; j++){
     
      let colornegro;
      colornegro = color (10);
      let colorcubos = color (0);
      
       
       
      let tam = 18;
      let distan = dist ( mouseX, mouseY, i*40, j*40);
      let tono = distan*255/dist (width, height, 0, 0);
      
      if ((i+j)%2===0){
        fill ( tono);
      } else {
        fill (black (0));
      }
     
     
      noStroke ();
      rect (i*40, j*40, 39, 39);
      
      
      if ((i+j)%2===0){
        fill ( colornegro);
      } else {
        fill (tono);
      }
      
      //float d = dist (mouseX, mouseY, width/2, height/2);
      //float tama = map (mouseX, width/2, height/2, 0, 30);
      let tama = 20;
      
      let velocidad = 3.0;
      if (keyPressed === true && key === 'd'){
        tama = tama + 10;
      } 
      ellipse ( i*40+40/2, j*40+40/2, tama, tama);
    }
}
}

      function mousePressed(){
          colornegro = color (255);
        
        }


function keyPressed (){
  i = 0;
  j = 0;
}
