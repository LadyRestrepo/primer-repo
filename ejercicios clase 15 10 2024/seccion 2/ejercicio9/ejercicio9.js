// Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecutándose.
let salir = false; 
while (!salir) {
    let respuesta = prompt("desea salir del programa S/N")
    if (respuesta === "S") {
       salir= true
        console.log("el programa ha finalizado ")
    }else {
        console.log("el programa continua en ejecucion")
        
        
    }
}
