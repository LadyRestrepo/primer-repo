// Función para sumar
function sumar(a, b) {
    return a + b;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir
function dividir(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}

// Función principal para calcular
function calcular() {
    // Definimos dos números de ejemplo
    let num1 = prompt("ingrese numero 1 ");
    let num2 = prompt("ingrese numero 2");

    // Definimos la operación
    let operacion = prompt("ingrese operacion a ejecutar ");

    // Realizamos la operación con un switch
    let resultado;
    switch (operacion) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Mostramos el resultado en la consola
    console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
}

// Ejecutamos la calculadora
calcular();