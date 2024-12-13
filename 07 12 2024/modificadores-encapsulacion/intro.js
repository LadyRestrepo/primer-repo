/*
Los modificdores de acceso restringen al acceso a métodos o 
porpiedades de los objetos según el contexto
En javascript tenemos dos modificadores, private y el public
*/

class Barco{
    //modificadores de acceso, en este caso privados
    //empiezan con #
    #nombre;
    #tipo;
    #edad;
    constructor(nombre, tipo, edad, color){
        this.#nombre = nombre;
        this.#tipo = tipo;
        this.#edad = edad;
        this.color = color;
    }
    //mpetodo privado, solo se puede acceder
    //dentro de la clase
    #infoConfidencial(){
        console.log("Esta información es confidencial");
    }

    navegar(){
        console.log(`${this.#tipo} navegando`);
    }
    //get de nombre
    getNombre(){
        return this.#nombre;
    }
    //set de nombre
    setNombre(nombre){
        this.#nombre = nombre;
    }

    //get de edad
    getEdad(){
        return this.#edad;
    }
    //set de edad
    setEdad(nuevaEdad){
        if (nuevaEdad > 0){
            this.#edad = nuevaEdad
        }
    }
}

const barco1 = new Barco("La Mary", "Yate", 20, "Blanco");
let nombreActual = barco1.getNombre();
console.log("Nombre del barco actual ", nombreActual);
barco1.setNombre("Mary")
let nuevoNombre = barco1.getNombre();
console.log("Nombre del barco actual ", nuevoNombre);
console.log("Edad actual del barco ", barco1.getEdad());
barco1.setEdad(12)
console.log("Edad actual del barco ", barco1.getEdad())
console.log("Color ", barco1.color);
;







