// Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.
let numero = parseInt(prompt("ingrese numero a verificar"));
let division = numero / 5 ;
if (division % 2 === 0) {
    console.log ("es divisible, sin residuo");
} else {
    console.log("no es divisible, genera residuo ");
}

 

switch (division % 2 === 0 ){
     case true:
     console.log("El numero es divisible, sin residuo");
     break ;
     default:
        console.log("El numero no es divisible, genera residuo");
        

    
 }
    