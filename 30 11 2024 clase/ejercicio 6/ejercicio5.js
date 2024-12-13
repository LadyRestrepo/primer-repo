//Usa map para duplicar los números de un array y luego filter 
//para obtener solo los mayores de 10.

let numeros = [1, 5, 10, 9, 15];
const duplicar = (numeros) => numeros.map(numero => numero * 2); 

function obtenerMayores(numeros, callback) {
    let duplicados = callback(numeros);
    let mayores = duplicados.filter(numero => numero > 10);
    return mayores;
}
let resultado = obtenerMayores (numeros, duplicar);
console.log(resultado);

