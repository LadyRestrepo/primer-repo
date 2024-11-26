/*La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G), según se indique al momento de ejecutar el programa. */

let base = parseInt(prompt("ingrese largo de la cadena"));
let charADN = prompt("ingrese caracter A o T o C o G ");
let acumuladoraCadena = "" ;
for (let index = 0; index < base; index++) {
    acumuladoraCadena = acumuladoraCadena + charADN;

}    console.log(acumuladoraCadena);


