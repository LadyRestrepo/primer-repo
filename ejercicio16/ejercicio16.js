let dato1 = parseFloat(prompt("ingrese valor de a"));
let dato2 = parseFloat(prompt("ingrese valor de b"));
let dato3 = parseFloat(prompt("ingrese valor de c"));
// (-b+√(b²-4ac))/(2a) 
let paso1 = dato2 ** 2;
// (-b+√(paso1-4ac))/(2a) 
let paso2 = 4 * dato1 * dato3;
// (-b+√(paso1-paso2))/(2a) 
let paso3 = paso1 - paso2;
if (paso3 >= 0) {
    // (-b+√paso3/(2a) 
    let paso4 = 2 * dato1;
    // -b+√paso3/paso4
    let paso5 = Math.sqrt(paso3)
    // -dato2+paso5/paso4
    let paso6 = -dato2 + paso5;
    // -dato2+paso5/paso4
    let paso7 = paso6 / paso4;
    console.log(paso7);
}else {
    console.log("no tiene una solucion real ");
    
}









// (-b-√(b²-4ac))/(2a)


// (-b±√(b²-4ac))/(2a)
//Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación cuadrática correspondiente.