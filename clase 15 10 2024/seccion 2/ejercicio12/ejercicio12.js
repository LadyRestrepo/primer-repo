//// 12. Programa que calcula la suma de los cuadrados de los números entre 1 y n
let nCuadrados = parseInt(prompt("Ingrese el valor de n para calcular la suma de cuadrados:"));
let sumaCuadrados = 0;
for (let i = 1; i <= nCuadrados; i++) {
  sumaCuadrados += i * i;
}
console.log(`La suma de los cuadrados de los números entre 1 y ${nCuadrados} es: ${sumaCuadrados}`);


