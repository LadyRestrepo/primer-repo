//Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.
let numero = parseFloat(prompt("ingrese numero a verificar"));
if (numero % 2 === 0) {
    console.log ("par");
} else {
    console.log("impar");
}

switch (numero % 2 === 0) {
    case true:
        console.log("par");
        
        break;

    default:
        console.log("impar");
        
        break;
}

