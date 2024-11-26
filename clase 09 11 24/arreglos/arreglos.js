/*
/*
let arreglo = [ 20,  4, 7, 8 ];
console.log(arreglo);
//lectura de elementos 
let elemento0 = arreglo[0]
let elemento3 = arreglo[3]
console.log("elemento 0 ", elemento0 );
console.log("elemento 3", elemento3);
console.log("elemento 10", arreglo[10]);
console.log("elemento 10", arreglo[-1]);
//longitud de un arreglo o cantidad de elementos de un array, usamos .length
let longitudArreglo = arreglo.length;
console.log(longitudArreglo);


let arregloVacio = [ ];
console.log(arregloVacio.length);

arreglo[1] = 33;
console.log("nuevo valor", arreglo[1]);

console.log("todo el arreglo", arreglo);

//agregacion de elementos a un array 
//agregamo el 16 al arreglo 
arreglo.push(16) ;
console.log("nueva longitud", arreglo.length);

arreglo.push(-90);
console.log(arreglo);

//eliminacion de elementos usando splice 
//aliminar elemento [2]

arreglo.splice(2, 1) ;
console.log(arreglo);
//eliminamos 2 elementos a partir del index 1 
arreglo.splice(1, 2)
console.log(arreglo);

*/
//Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de índice 2 y 4.
/*
let j = [200, -100, 45, 78, 32];

let j2 = j [2];
let j3 = j [4];
console.log( j2 , j3);

//Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los 
//elementos       cd y gh.

let f = ["ab", "cd", "ef", "gh"] ;
let f1 = f[1];
let f2 = f[3];
console.log(f1 , f2 );

//Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
let a = [1, 2, false];
a.splice (2, 1)
console.log(a);

//Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el 
//elemento de índice 2 por true, cambiar el elemento de índice 3 por false.

let h = [true, true, false,true, false]
h[2] = true
h[3] = false
console.log(h);

//Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento 
//"jp" por true, cambiar el elemento "qr" por 30 .

let w = ["wc", "jp", "zx", "qr"]
w[1] = true
w[3] = 30
console.log(w);
*/

//RECORRIDOS DE ARREGLOS 
let arreglo2 = ["manzana" , "pera" , "limones"];
for (let index = 0; index < arreglo2.length; index++) {
     console.log("index" , index);
     console.log("elemento" , arreglo2[index]);

}
//otra forma de recorrer con ciclo foreach 
arreglo2.forEach((elemento) =>{
    console.log("elemento: ", elemento);   
}
)

let arregloA = ["a", "b", "c"];
//copia independeinte
let copiaIndependiente = arregloA.slice() ;









