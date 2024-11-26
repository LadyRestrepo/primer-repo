/*** 1. Cristiana, una joven investigadora del LabSADN, necesita un conjunto de programas que le ayuden a
generar e imprimir cadenas de ADN de una longitud indicada por ella y además que dichas cadenas
cumplan ciertas condiciones. Cada uno de los siguientes puntos debe ser un programa diferente.

/***
b. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
cualquier posición y orden dentro de la cadena.
***/

let long = prompt("ingrese la longitud de la cadena : ");

const cadena = () => {
    const chars = "AGTC"
    const randInt1 = chars.charAt( Math.floor(Math.random() * chars.length));
    const randInt2 = chars.charAt( Math.floor(Math.random() * chars.length));

    let cadena = "";

    for(let i = 0; i < long; i++){
        cadena += Math.random() < 0.5 ? randInt1 : randInt2;
    }
    console.log({cadena,longitud : cadena.length})
}
cadena()

letras <- "AGTC"
n <- 10
cadena <- ""

PARA I hasta n hacer
    indicerandom1 <- Generar_numero_random()
    indicerandom2 <- Generar_numero_random()

    SI Generar_numero_random() < 0.5 ENTONCES
        cadena += indicerandom1
    SINO
        cadena += indicerandom2
    FIN SI
FIN PARA
IMPRIMIR cadena



