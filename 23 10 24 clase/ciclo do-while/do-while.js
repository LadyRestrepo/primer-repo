//usamos dowhile cuando requerimos ejecutar el bloque  de instrucciones al menos una vez 
/*
let letra;
do {
    letra = prompt("ingrese letra")
    console.log(letra);   
} while (letra != "z");

//version con while
let letra2 = prompt("ingrese letra")
while (letra2 != "z") {
    letra2 = prompt("ingrese letra")
    console.log(letra2);    
}
*/
//crear un programa qeu piida datos de registro a un  usuario
//que sea, edad, estatura, y peso, el programa debe pedir indefinidamente los datos de registro en caso de que alguno no cumpla para poder registarse la edad debe ser de una persona mayor de edad, la estatuta sup a 1.75m y peso entre 75 y 100kg
 /*let edad = parseInt(prompt ("ingrese edad"))
 let estatura = parseFloat(prompt("ingrese estatura"))
 let peso = parseFloat(prompt("ingrese peso"))


 if (edad >= 18 ) {
    console.log("si cumple edad"); 
 } else {alert("no cumple edad requerida")  
 }
  
 if (estatura >= 1.75) {
    console.log ("si cumple estatura")
    
 } else {alert ("no cumple estatura requerida")
    
 }
 if (peso >= 70, peso <= 100) {
    console.log("si cumple peso");

 } else { alert ("no cumple")
    
 }*/

 /*let edad = parseInt(prompt ("ingrese edad"))
 let estatura = parseFloat(prompt("ingrese estatura"))
 let peso = parseFloat(prompt("ingrese peso"))
*/
 /*switch (edad >= 18 && estatura >=1.75 && peso >= 75 && peso <= 100) {
   case true:
     console.log("La figura es un triangulo ");
     break;
   default:
    
 }
*/

let edad;
let estatura;
let peso;
 
do {
   edad = parseInt(prompt ("ingrese edad"))
   estatura = parseFloat(prompt("ingrese estatura"))
   peso = parseFloat(prompt("ingrese peso")) 
} while (edad > 18 && estatura > 1.75 && (peso > 75 && peso < 100));
console.log("ingreso correcto"); 
