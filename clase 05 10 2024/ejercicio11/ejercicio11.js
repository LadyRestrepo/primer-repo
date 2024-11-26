function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const aleatorio = numeroAleatorio(1, 6);
console.log(aleatorio);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const aleatorio2 = numeroAleatorio(1, 6);
console.log(aleatorio2);

let resultado = aleatorio + aleatorio2;

console.log ("la suma de los dados es =",resultado); 

//. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados 