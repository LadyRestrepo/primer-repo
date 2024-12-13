//Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.
let n1 = parseInt(prompt("ingrese un numero entre 1 y 15"));
let condicion = (n1 >= 1 && n1 <= 15)
let isPrimeNumber = ((n1 % 2) != 0)


if (condicion == true) {
    if (isPrimeNumber != 0) {
        console.log("Es numero primo.");
    } else {
        console.log("Es numero no primo");
    }
} else {
    console.log("ingrese numero dentro del rango");
}


if (condicion == true) {
switch (isPrimeNumber) {
    case 0:
        console.log("No es numero primo");
        break;
    default:
        console.log("Es un numero primo");
        break;
} } else {
    console.log("ingrese valor dentro del rango");
    
} 

/*
let n1 = parseInt(prompt("ingrese un numero entre 1 y 15"));
let condicion = (n1 >= 1 && n1 <= 15)
let isPrimeNumber = ((n1 % 2) != 0)

n1 = !condicion ? parseInt(prompt("ingrese un numero entre 1 y 15")) : n1;

switch (isPrimeNumber) {
    case true:
        console.warn(`my number is prime ${n1}`)
        break;
    case false:
        console.warn(`my number is a not prime ${n1}`)
        break;
}

*/

for (let index = 1; index < 100; index++) {
    console.log(index);
    ;
    
}
let index = 1;
while (index < 100) {
    index++; :
    
}