//Hacer una función de orden superior que reciba una string y un callback , y retorne la longitud del 
//string pasado
/*let mensajeAnalizar = "hola mundo";
//este seria el callback definido 
//let longitudString = (cadena) => cadena.length;
function longitudString(mensajeAnalizar) {
    return mensajeAnalizar.length; 
}

function longitudCadena(mensajeAnalizar, callback) {
    let longitud = callback(mensajeAnalizar); 
    return longitud; 
}
let resultado = longitudString (mensajeAnalizar, longitudString)
console.log(resultado);
*/

const suma = (a, b) => a + b; 

function sumaPrincipal(a, b, callback) {
    let resultado = callback (a, b);
    return resultado;

}
let resultadoSuma = sumaPrincipal (3, 4, suma );
console.log("resultado ", resultadoSuma);



