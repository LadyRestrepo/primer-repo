class Circulo {
    constructor(radio) {
        this.radio = radio;
        this.pi = 3.1416;
    }
}
 function calcularArea() {
    return this.pi * (this.radio * this.radio);
    
 }

 const circulo1 = new Circulo(5) ;
 let areaCirculo1 = circulo1.calcularArea();
 console.log(areaCirculo1);
 
