//Escribe una función que reciba un string y use forEach para imprimir cada letra en una nueva línea.
let palabra = prompt("ingrese frase");

const imprimirPalabra = palabra => palabra.split("").forEach(letra => console.log(letra))

imprimirPalabra(palabra);