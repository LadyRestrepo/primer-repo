/*En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.
*/
 let producto = prompt("Ingrese nombre de su producto /n1)lentejas /n2)crema /n3)arroz /n4)vino");
switch (producto) {
    case "lentejas":
        console.log("Este producto esta excento de iva");
        break;
    case "crema":
        console.log("Este producto no esta excento de iva");
        break;
    case "arroz":
        console.log("Este producto esta excento de iva");
        break;
    case "vino":
        console.log("Este producto no esta excento de iva");
        break;
    
    default:
        console.log("Ingrese un producto de la lista ");
        break;
}


let producto1 = prompt("ingrese un producto a verificar ")
if(producto1 == "arroz" || producto1 == "lentejas"){
    console.log("este producto esta excento de iva");
} else if (producto1 == "crema" || producto1 == "vino"){
    console.log("este producto no esta excento de iva");
} else { 
    console.log("producto ingresado no disponible para validacion");
    
}