//  Cree un programa que muestre los números impares entre 1 y n.

function mostrarImpares(n) {
    // Recorremos desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        // Verificamos si el número es impar
        if (i % 2 !== 0) {
            console.log(i); // Mostramos el número impar
        }
    }
}
let n = parseInt(prompt("Introduce un número:")); // Convertimos el input a un número
if (!isNaN(n) && n > 0) { // Verificamos que sea un número válido y mayor que 0
    mostrarImpares(n);
} else {
    console.log("Por favor, introduce un número válido.");
}

