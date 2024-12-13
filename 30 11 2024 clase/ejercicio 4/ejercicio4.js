//Dado un array de nombres, conviértelos a mayúsculas y ordénalos 
//alfabéticamente.
let nombres = ["lady", "robert", "maria"];
const ordenAlfabetico = (nombres) => nombres.sort();

function convertirMayusculas(nombres, callback) {
    let mayusculas = callback(nombres);
    let mayusculas2 = mayusculas.map(nombre => nombre.toUpperCase());
    return mayusculas2;
}
let resultado = convertirMayusculas (nombres, ordenAlfabetico);
console.log(resultado);
