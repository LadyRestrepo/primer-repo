//Cree un programa que calcule el promedio de 10 números.

 let sumanums = 0
for( i = 1 ; i<=10 ; i++){
    let num = parseInt(prompt(`ingrese el ${i} numero`))
    sumanums = sumanums+num
}

console.log(`El promedio de sus numeros es ${sumanums/10}`);