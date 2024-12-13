let edad;
let estatura;
let peso;
do {
    edad = parseInt(prompt("ingrese edad"))
    estatura = parseFloat(prompt("ingrese estatura"))
    peso = parseFloat(prompt("ingrese peso"))
} while (edad < 18 || estatura < 1.75 || (peso < 75 || peso > 100));
console.log("registrado exitosamente");



/* while (!(edad >= 18) || !(estatura >= 1.75) || !(peso >= 75 || peso <= 100));
es igual pero en negacion 
*/
