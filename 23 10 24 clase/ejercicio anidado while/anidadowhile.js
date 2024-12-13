// depende de una condicion para ejecutarse, la condicion puede depender de una variable entera, string, boolean etc, siempre debe garantizarce que la condicion alguna vez no se cumpla, estoo se hace manipulado la variable control del ciclo  
console.log("while 10 hola lvankversity");

let control = 1;
while (control <= 10) {
    console.log("hola vankversity");
    control++;
}

console.log("while que no se ejcuta");
let control2 = 20 
while (control2 <= 10) {
    console.log("hola vankversity");
control12++    
}




console.log( "multiplos de 7 entre 10 y 700 en orden descendietne");

let numero = 700;
while (numero >= 10) {
    if (numero % 7 === 0) {
        console.log(numero); 
    }
    numero--; 
}


console.log("multiplos de 7 entre 10 y 100 en orden descendiente con index");

let i = 700
while (i >= 10) {
    if (i % 7 === 0) {
        console.log(i);
     }
    i--;
}
