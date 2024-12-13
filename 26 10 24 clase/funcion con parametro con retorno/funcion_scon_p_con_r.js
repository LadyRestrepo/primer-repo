//funcion tiene como parametros la base y la altura de un triangulo y retorna su area 
function areaTrinagulo(base, altura) {
    let area = base * altura /2;
    return area;
}
let base = parseFloat(prompt("ingrese base "));
let altura = parseFloat(prompt("ingrese altura "));
//llamamos a la funcion 
let area = areaTrinagulo(base, altura);
console.log(`el area del triangulo es: , ${area}`);

/*
function areaTriangulo(base, altura) {
    let area = base * altura / 2;
    return area;
}

//pedimos base y altura al usuario
let base = parseFloat(prompt("Ingrese base"));
let altura = parseFloat(prompt("Ingrese altura"));
//llalamos a la funcion
let area = areaTriangulo(base, altura);
console.log("El área del triángulo es: ", area);  */