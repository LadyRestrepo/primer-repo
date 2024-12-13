class Circulo {
    constructor(radio) {
        this.radio = radio; 
        //Propiedad pública
        this.pi = 3.1416; 
        // Valoraproximado de π
    }
    // Método para calcular el área
    calcularArea() {
        return this.pi * (this.radio *
            this.radio);
    }
    // Método para calcular el perímetro
    calcularPerimetro() {
        return 2 * this.pi *
            this.radio;
    }
}
//aca circulo1 es una isntancia o un objeto de circulo
const Circulo1 = new Circulo(5);
let areaCirculo = Circulo1.calcularArea();

console.log(areaCirculo);
let perimetroCirculo = Circulo1.calcularPerimetro();
console.log(perimetroCirculo);

console.log(Circulo1.radio);

console.log("----------------");

const Circulo2 = new Circulo(2);
let areaCirculo2 = Circulo2.calcularArea();

console.log(areaCirculo);
let perimetroCirculo2 = Circulo2.calcularPerimetro();
console.log(perimetroCirculo2);

console.log(Circulo2.radio);

