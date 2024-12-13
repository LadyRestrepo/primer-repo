//funciones flecha, funcion que retorna un saludo 
//esta funcion solo tiene una instruccion, por lo tanto no es necesario poner llaves ni retorno

/*
const saludo = () => "Hola mundo";
console.log(saludo());


//funcion flecha con parametros 
console.log("_________________________");

const suma = (a, b) => a + b;
let resultado = suma(2, 6)
console.log(resultado);


// version normal 
function name(a, b) {
    return a + b;
}*/

// funcion flecha con mas de una instruccion, devuelve  el area y perimetro dada la 
//base y altura de un rectangulo 
const areaPerimetro = (base, altura) => {
    let area = base * altura;
    let perimetro = 2* (base + altura);
    return `Area: ${area} Perimetro : ${perimetro}`
}
let areaPerimetroRec  = areaPerimetro (1 , 3) ;
console.log(areaPerimetroRec);
