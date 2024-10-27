//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva
//True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso
//contrario.


let letra = prompt("ingrese letra :");
function esVocal(letra) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return true;
    }
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        return true;

    } 
        return false;
    }
    console.log(esVocal(letra));
    


