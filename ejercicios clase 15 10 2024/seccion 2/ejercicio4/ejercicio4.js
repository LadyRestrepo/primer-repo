//Cree un programa que calcule el promedio de tres notas para n estudiantes. Use // //ciclo for. Use funciones.
let estudiantes = parseInt(prompt("ingrese numero de estudiantes")) ;
let index = 0 ; 
do {
  
  index++ ;
} while (index < estudiantes);
let notaA = parseFloat(prompt("ingrese nota 1"));
let notaB = parseFloat(prompt("ingrese nota 2"));
let notaC = parseFloat(prompt("ingrese nota 3"));
let notafinal = (notaA + notaB + notaC) /3;





for (let index = 1; index < estudiantes; index++) {
   console.log("El estudiante ", index , " Tiene este promedio ", notafinal, );
   
  
}










/*
function calcularPromedio(estudiantes) {
    for (let i = 1; i <= estudiantes; i++) {
      let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante ${i}:`));
      let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante ${i}:`));
      let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante ${i}:`));
      let promedio = (nota1 + nota2 + nota3) / 3;
      console.log(`El promedio del estudiante ${i} es: ${promedio.toFixed(2)}`);
    }
  }
  let numeroEstudiantes = parseInt(prompt("Ingrese el número de estudiantes:"));
calcularPromedio(numeroEstudiantes);

*/
 

let estuadientes= parseInt(prompt("Ingresa cantidad de estudiantes: "));

let notaUno;
let notaDos;
let notaTres;
let notaFinal;

let i = 1;

do {
    notaUno = parseFloat(prompt("Ingresa la nota 1: "));
    notaDos = parseFloat(prompt("Ingresa la nota 2: "));
    notaTres = parseFloat(prompt("Ingresa la nota 3: "));
    notaFinal = (notaUno+notaDos+notaTres)/3;
    console.log("La nota del estudiante ", i, " seria: ", notaFinal);
    i++;
} while (i <= estuadientes);