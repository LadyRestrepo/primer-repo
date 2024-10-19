let numero = parseFloat(prompt("Introduce un número para calcular su factorial:"));
let resultado = factorial(numero);
function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (n === 0) {
        return 1; // 0! es 1
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
// Calcular y mostrar el resultado

console.log(`El factorial de ${numero} es ${resultado}`);

//Cree un programa que calcule el factorial de 5