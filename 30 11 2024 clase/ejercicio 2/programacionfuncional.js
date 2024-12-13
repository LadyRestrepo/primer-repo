/*paradigma que se centra en resolver problemas usando funciones de manera declarativa 
-Funciones de orden superior : son funciones uq ereciben como argumentos a otras funciones o que retornan otra funcion 
-callback; es una funcion qeu se pasa como argumento a otra funcion y se ejecuta cuando el trabajo ha terminado 
*/
//Funciones de orden superior : realizar la suma de a y b usando un callback
const sumaAB = (a,b) => a + b;
function suma(a, b, callback) {
    let resultado = callback(a, b)
    return resultado;
}
let resultadoSuma = suma(3, 5, sumaAB)
console.log("resultado " , resultadoSuma);

console.log("---------------------------------");

//realizar un saludo a una persona con un callback 
const saludo = (nombre, apellido) => `${nombre} ${apellido}`
function hola(nombre, apellido, callback) {
    let saludoCompleto = callback (nombre, apellido);
    console.log(saludoCompleto);
    
}
hola ("juan", "perez", saludo);

console.log("---------------------------------");
//funciones que retornan otra funcion 
function saludoT(saludo1) {
    return function saludoSegundaParte(saludo2) {
        return `${saludo1} ${saludo2}` ;
    }
    
}
let primeraParte = saludoT("hola...");
let saludoTotal = primeraParte ("Pedro")
console.log(saludoTotal);


console.log("---------------------");

//suma por partes
function sumaA(a) {
    return function sumaAB(b) {
        return a + b;
        
    }
}
let sunmaParcial = sumaA(3);
let sumaTotal12 = sunmaParcial(7); 
console.log("suma total" , sumaTotal12);

//metodo every : nos sirve para verificar si una condicion en un arreglo siempre se cumple o no 
const numeros = [10, 20, 30, 40];
const todosPositivos = numeros.every((num) => num > 0);
console.log(todosPositivos);

const nombres = ["maria", "juan", "Bolivar"]; 
const todosMasTresCaracteres = nombres.every ((nombre) => nombre.length > 4);
console.log("todos tienes mas de 3 char", todosMasTresCaracteres);

//uso de setTimeout : es una manerqa de trabajar asincronizidad en javascrip

setTimeout(() => {
    console.log("hola vank");
    
}, 4000);

console.log("zzzzzzzzzzzzz");
