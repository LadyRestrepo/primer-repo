//La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases. El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se cumple, el programa debe informar y solicitar nuevamente los datos.


/*
let salir = false;
while (!salir) {
    let long = parseInt(prompt("ingrese una longitud multiplo de 10"));
    if (long % 10 === 0) {
        salir = true
        let longG = long / 10 ;
        let longT = longG * 2 ;
        let longC = longG * 4 ;
        let longA = longG * 3 ; 
        console.log(longG , longT , longC , longA );
          
        
    } else {
        console.log("numero incorrecto, ingrese valor valido");

       

    }
}*/


let longitud;

do {
    longitud = parseInt(prompt("Ingresa una longitud múltiplo de 10 para la cadena de ADN: "), 10);
    if (longitud % 10 !== 0 || longitud <= 0) {
        alert("La longitud debe ser un múltiplo de 10 y mayor que 0. Intenta de nuevo.");
    }
} while (longitud % 10 !== 0 || longitud <= 0);

// Calculamos la cantidad de cada base
const cantidadGuanina = longitud / 10;
const cantidadCitosina = cantidadGuanina * 4;
const cantidadTimina = cantidadGuanina * 2;
const cantidadAdenina = cantidadGuanina * 3;

// Construimos la cadena
let cadena = 'C'.repeat(cantidadCitosina) +
             'G'.repeat(cantidadGuanina) +
             'T'.repeat(cantidadTimina) +
             'A'.repeat(cantidadAdenina);

// Mezclamos la cadena
const arreglo = cadena.split('');
for (let i = arreglo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
}

const cadenaMezclada = arreglo.join('');
console.log("Cadena de ADN generada:", cadenaMezclada);