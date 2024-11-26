//Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.
let contador = 0;
let interacciones = 0;
let numeroActual;

do {
    numeroActual = parseInt(prompt("Digite un numero"))
    contador += numeroActual;
    interacciones++;
} while (numeroActual != 0); 

alert(`El promedio de los numeros digitados es ${contador/(interacciones - 1)}`)
/*
let suma = 0;
let cant = 0;
do {
    let n = parseFloat(prompt('Ingrese el numero'));
    suma += n;
    cant++;
} while (n != 0);
let promedio = suma / cant;
console.log(`El promedio de los numeros ingresados es ${promedio}`); */



/*let sumaPromedio = 0;
let contadorPromedio = 0;
while (true) {
  let numero = parseFloat(prompt("Ingrese un número (0 para detener):"));
  if (numero === 0) break;
  sumaPromedio += numero;
  contadorPromedio++;
}
if (contadorPromedio > 0) {
  let promedio = sumaPromedio / contadorPromedio;
  console.log(`El promedio de los números ingresados es: ${promedio}`);
} else {
  console.log("No se ingresar*/