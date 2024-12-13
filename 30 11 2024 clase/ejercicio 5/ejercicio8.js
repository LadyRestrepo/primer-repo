//Usa every para verificar si todos los números en un array son positivos.

let num = [-4, 3, -9, 6, 7];
function verificarPositivos(num) {
   let numPositivos = num.map(num => num > 0);
   return numPositivos; 
}
let newArreglo = verificarPositivos(num)
console.log(newArreglo);

