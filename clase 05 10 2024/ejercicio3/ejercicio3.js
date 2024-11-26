let dato1 = parseFloat(prompt("ingrese valor de electrodomestico"));
let dato2 = parseFloat(prompt("ingrese el numero de cuotas"));
let division = dato1 / dato2;
let interesmes = division*0.05;
let interestotal = interesmes+division;
console.log ("EL valor a pagar es=",interestotal);
//En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un electrodoméstico y el plazo en meses para  pagarlo a crédito y muestre el valor fijo de las cuotas mensuales que deberá pagar por el electrodoméstico.