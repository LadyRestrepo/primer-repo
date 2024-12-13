//Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
//de vocales que contiene la cadena

function esVocal(letra) {
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
      return true;
  }
  if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
      return true;

  } 
      return false;
  }

function halarVocales(palabra){
    let cont=0;
    for(let i=0; i<palabra.length;i++){
        if(esVocal(palabra[i])==true){
            cont++;
        }
    }
    return cont;
}
let cantidadVocales = halarVocales ("programacion")

console.log(cantidadVocales);
