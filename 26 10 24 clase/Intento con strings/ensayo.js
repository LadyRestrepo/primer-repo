/*let mensaje = "hola mundo" ;
for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}

let mensajes = "hola mundo";
mensajes[1] = "z";
console.log(mensajes);
*/
/*let mensaje = "javascript es un buen lenguaje" ;

    
console.log(mensaje[3] );
console.log(mensaje[6] );
console.log(mensaje[8] );

for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}*/
//Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “V”

/*


let mensaje = "somos ankersity";
let contieneV = false; 
for (let index = 0; index < mensaje.length; index++) {
    if (mensaje [index] === `v`) {
        contieneV = true
        break; 
    }
}
if (contieneV) {
    console.log("La cadena contiene la letra 'V'.");
} else {
    console.log("La cadena no contiene la letra 'V'.");
}
console.log("--------------------");




*/




/*


let string = "somos vankversity";

if (string.includes(`v`)) {
    console.log("La string tiene la letra v");
    
}else{
    console.log("la string no contiene la letra v");
    
}
    

*/



//Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una variable contadora para contar el número de veces que se encuentra la letra “o”.




/*
let string = "somos vankversity";
let contadora = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === "o") {
        contadora++; 
        
    }
}
    console.log("la letra o aparece"+ contadora + "veces");
    


    */


//3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.
/*
    let string = " somos vankversity";
    let contadora = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            contadora++; 
            
        }
    }
        console.log("la frase tiene " + contadora +  " palabras");
   */
/*


let string = " javascript es genial";
let contadora = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        contadora++;
    }
} console.log(`la frase tiene ${contadora} palabras`);


*/
/*
let notas = 0;
for (let i = 1; i <= 5; i++) {
    let nota = parseInt(prompt("ingrese su nota"));
notas += nota;
}
console.log(notas);    */



/*
let goles = 0;
for(let i = 0; i < 5; i++ ){
let gol = prompt("Metieron gol? (S/N)");
if(gol == "S"){
goles++
}
}
console.log(goles);  */

//Programe un algoritmo que pida un nombre y la nacionalidad y los muestre,
//todo esto tantas veces como diga el usuario
/*
let contadora = prompt("cuantas veces quiere que se imprima la info");
let nombre = prompt("ingrese nombre") ;
let nacionalidad = prompt("ingrese nacionalidad"); 
for (let index = 0; index < contadora; index++) {
    console.log(`Nombre: ${nombre} Nacionalidad: ${nacionalidad}`);
    
}*/

let bases = ["A", "T", "C", "G"];
let base1 = bases[Math.floor(Math.random() * bases.length)];
let base2;
do {
    base2 = bases[Math.floor(Math.random() * bases.length)];
} while (base1 === base2);
longitud = prompt("Ingresa la longitud de la cadena:");
cadena = "";
for (let i = 0; i < longitud; i++) {
    cadena += Math.random() < 0.5 ? base1 : base2;
}
console.log(`Cadena de ADN: ${cadena}`);



