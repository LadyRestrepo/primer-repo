//Mostrar los números impares entre n y m

let numeron = parseInt(prompt("ingrese numero a verificar"));
let numerom = parseInt(prompt("ingrese numero a verificar"));
for (let i = numeron; i <= numerom; i++) {
    if (i % 2 != 0){
        console.log(i);
        
    }
}


let numbern = parseInt(prompt('Ingrese el primer número: '));
let numberm = parseInt(prompt('Ingrese el segundo número: '));
if (numbern < numberm){
for (let i = numbern; i <= numberm; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
}}