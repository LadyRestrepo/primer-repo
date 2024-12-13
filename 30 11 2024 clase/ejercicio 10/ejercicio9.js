//Usa reduce para combinar las palabras de un array en una sola oración.
let array = ["yo ", "puedo ", "programar"]
function combinar(array) {
    let combinado = array.reduce((acumulador, palabra) => acumulador + "" + palabra);
    return combinado;
}let resultado= combinar (array);
console.log(resultado);
