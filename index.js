let numeroAleatorio1 = Math.floor(Math.random() * 6) + 1; // Creo un numero random entre el 1-6 para la imagen del player 1

let numeroAleatorio2 = Math.floor(Math.random() * 6) + 1; // Creo un numero random entre el 1-6 para la imagen del player 2

var etiqueta = document.getElementById("h1"); // Slecciono a partir del ID la etiqueta h1

var diceAmostrar1 = document.getElementById("img1"); // A partir del ID selecciono la Img1

var diceAmostrar2 = document.getElementById("img2"); // A partir del ID selecciono la Img1

diceAmostrar1.setAttribute("src","images/dice"+ numeroAleatorio1 +".png"); // Cambio la imagen a mostrar vinculando la direccion donde se encuentran las imagenes con el numero alateroio y junto las cadenas para generar la imagen 1

diceAmostrar2.setAttribute("src","images/dice"+ numeroAleatorio2 +".png"); // Cambio la imagen a mostrar vinculando la direccion donde se encuentran las imagenes con el numero alateroio y junto las cadenas para generar la imagen 2

if(numeroAleatorio1 > numeroAleatorio2){                   

  etiqueta.innerText = "Player 1 Wins";

} else if(numeroAleatorio1 < numeroAleatorio2){

  etiqueta.innerText = "Player 2 Wins";

} else {

  etiqueta.innerText = "Draw";

}