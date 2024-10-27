let ladoa = parseFloat(prompt("ingrese lado a"));
let ladob = parseFloat(prompt("ingrese lado b"));
let ladoc = parseFloat(prompt("ingrese lado c"));
let grados = ladoa + ladob + ladoc ;
if (grados  === 180) {
    console.log("La figura es un triangulo");
  } else {
    console.log("la figura no es un triangulo");
  }
  //Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no

  switch (grados == 180) {
    case true:
      console.log("La figura es un triangulo ");
      break;
    default:
      console.log("la figura no es un triangulo");
  }