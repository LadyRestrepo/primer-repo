function miFuncion(n) {
    contador = n;
    for (let index = 1; index <= n; index++) {
    if (n % index === 0 ) {
        contador++
    }
     return contador
    }
}
     console.log(miFuncion(12));
