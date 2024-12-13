
/*un objeto en javascript, es una estructura se datos que tiene por elemtos pares llave,valor, los cuales van sepraardos por comas (,) esta estructura no es ordenanda, no iterable
*/
//inicializamos un objeto vacio 
/*let user = {};
// se puede inicializar tambien el objeto con pares clave valor 
let productos = { papa:2000 , arroz:3000, leche:4000};
// lectura con sintaxis punto (.)
let valorPapa = productos.papa; 
console.log("valor papa: ",valorPapa);
console.log("valor leche: ", productos.leche);
//lectura con sintaxis de corchetes 
//usarla dentro de ciclos o cuando la propiedad es un numero. 
let valorPapaCorchetes = productos["papa"]
console.log("valor papa: ", valorPapaCorchetes);
//uso de sintaxis con corchetes cuando las propiedades son numeros
let numeros = {1: "uno", 2: "dos", 3: "tres"};
let valorPropiedad1 = numeros[1];
console.log("valor de la propiedad 1: ", valorPropiedad1);
//agregar propiedades con sus valores 
user.nombre = "Vankversity" ;
user.tema = "Programacion" ; 
user.edad = 1;
user.estado = true ;
console.log("objeto user completo ", user);
//agregamos valores tambien con notacion de corchetes 
user["estatura"] = 180;
console.log("objeto user completo ", user);
// actualizacion de valores 
user.tema = "Programacion Javascript" ; 
console.log("objeto user completo ", user);
//elimicaion de pares clave-valor
delete user.estado; 
console.log("objeto user completo ", user);
delete productos ["papa"]
console.log("objeto producto completo ", productos);  */

/*1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo
precio. Los productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el
objeto anterior con su respectivo producto.
2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. Imprima todo el
objeto para verificar que se han agregado las nuevos pares clave-valor */
/*let ProductosSupermercado = {papa:2000, arroz:3000, lentejas:2500, aceite:6000, }
valorPapa1 = ProductosSupermercado.papa; 
valorArroz1 = ProductosSupermercado.arroz;
valorLentejas1 = ProductosSupermercado.lentejas;
valorAceite1 = ProductosSupermercado.aceite;
console.log("valor papa: ", valorPapa1);
console.log("valor arroz: ", valorArroz1);
console.log("valor lentejas: ", valorLentejas1);
console.log("valor aceite: ", valorAceite1);

let objeto = {}
objeto.dia = 16;
objeto.mes = 11;
objeto.año = 2024
console.log(objeto);*/

/*. Dado el objeto {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la
clave password por "user_7833", el valor de la clave rol por "user", el valor de la clave edad
por 34. Imprima todo el objeto para verificar los cambios. */
/*let object = {password: "admin30905", rol: "admin", edad: 20}
object.password = "user_7833"; 
object.rol = "user";
console.log(object);
//funciones metodos dentro de objetos 
let carro = {color: "rojo", costo: 30000000, acelerar(){
    console.log("acelerando"); 
}   }
//acceder a la funcion 
carro.acelerar(); 
//object.keys() obtenemos las llaves de un objeto 
let llaveUser = Object.keys(user); 
console.log("llaves user: ", llaveUser);
//object.values() obtenemos los valores de un objeto 
let valoresUser = Object.values(user)
console.log("valores user: ", valoresUser);
//object.entries() obtenemos los pares llave-valor de un objeto 
 let entradasUser = Object.entries(user);
 console.log("pares de user", entradasUser);

 //recorrido for-in
 for (const clave in user) {
   console.log( "clave user", clave);
   console.log( "valor de user", user [clave]);
   console.log("________--------________");
   }
 */
//recorrido usado object.keys()
/*let numeros = {1: "uno", 2: "dos", 3: "tres"};

// Obtener las claves del objeto
const claves = Object.keys(numeros);

// Recorrer las claves y mostrar la propiedad y su valor
claves.forEach(clave => {
  console.log(`Propiedad: ${clave}, Valor: ${numeros[clave]}`);
});
*/
//4. Dado el objeto {dos: 2, cinco: 5, siete: 7, cuarenta: 40, 
//cincuenta: 50} recorrer el objeto y
//mostrar cuáles de los valores son pares.
/*let datos =  {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50} 
let clave = Object.values(datos);
for (const clave in datos) {
    if (datos[clave] %2 === 0) {
        console.log("valores pares" , datos[clave] );
          
    }  
}
*/

/*Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados.*/
/*
let datos = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };

let clave = Object.values(datos); 
let contadora = 0;

for (const clave in datos) {
    if (datos[clave] === "habilitado") 
        {
        
        contadora ++  
        } 
    }
console.log("los usuarios habilitados son " , contadora);
//6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } 
//recorrer el valor de la clave números.
const objeto = { numeros: [45, 78, 22, 89, 8] };

objeto.numeros.forEach((Element) => {
  console.log(Element);
});
    
*/
/*Dado el objeto { 3: "tres", 60: "sesenta", 10: "diez" } eliminar la clave valor 60-"sesenta". Imprima todo el objeto para verificar los cambios.*/
/*let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };
delete objeto [60]
console.log(objeto);
*/
/*8. Dado el objeto {

162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
}

Use dos ciclos for-in para recorrer los objetos más internos y mostrar
sus llaves y valores. Por ejemplo:
nombres Pepe
apellidos Perez
edad 40
---------
nombres Maria
apellidos Gomez
edad 31

---------
nombres Raul
apellidos Castro
edad 80
*/
let object = {162544: {nombres: "Pepe", apellidos: "Perez", edad: 40}, 4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    }
//recorridos cuando los valores son otros objtos
for (const key in object) {
    //aca el elemento es un objeto 
    let elemento = object [key]
    for (const key in elemento) {
        console.log(elemento[key]);  
        }
    }
    
    
    

