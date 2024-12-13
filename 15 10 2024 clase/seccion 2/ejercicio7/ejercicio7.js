//Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50.

for (let i = 1; i <= 50; i++) {
    console.log(`10 x ${i} = ${10 * i}`);   
}


for (let i = 1; i <= 50; i++) {
    let  table = '';
    for (let j = 1 ; j <= 10 ; j++){
        table += `${i} * ${j} = ${i * j}\n`;
    }
}