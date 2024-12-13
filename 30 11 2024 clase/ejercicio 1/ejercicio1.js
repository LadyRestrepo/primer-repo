const suma = (a, b) => a + b; 

function sumaPrincipal(a, b, callback) {
    let resultado = callback (a, b);
    return resultado;

}
let resultadoSuma = sumaPrincipal (3, 4, suma );
console.log("resultado ", resultadoSuma);