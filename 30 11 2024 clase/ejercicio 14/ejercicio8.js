//Crea una función que reciba un array de números y aplique diferentes operaciones (multiplicar, dividir,
//sumar) según condiciones definidas en un callback.
const operaciones = (operacion, numero) => {
    if (operacion == 'a') {
        return numero+numero;
    } else if (operacion == 'b') {
        return numero*numero;
    } else if (operacion == 'c'){
        return numero-numero;
    }
};

function operacionesResultados(operacion, arreglo, callback) {
    let arregloAux = [];
    for (let i = 0; i < arreglo.length; i++) {
        let resultado = callback(operacion, arreglo[i]);
        arregloAux.push(resultado);
    }
    return arregloAux
}