//Escriba una función que reciba el lado de un cubo y retorne su volumen

let lado = parseFloat(prompt ("ingrese ladoA: "));
function CuboVolumen(lado) {
    return lado * lado * lado ; 
}
console.log("el volumen del cubo es; " , CuboVolumen(lado));



