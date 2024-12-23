class Usuario {
    constructor(usuario, contraseña) {
        this.usuario = usuario;       // Nombre del usuario, estos se guardarian en el 
        //local storage
        this.contraseña = contraseña; // Contraseña del usuario, esta tambien se guardaria
        //en el local storage
    }
}

class SistemaAhorro {
    constructor() {
        this.usuarios = this.cargarUsuarios(); // Cargar usuarios guardados
        this.usuarioActual = null;             // Usuario actualmente logueado, 
        //inicialmente valor null, no hay aun un usuario logueado
    }

    // Registro de  un nuevo usuario que se desglosa de la primera clase Usuario linea 1 
    registrar(usuario, contraseña) {
        let nuevoUsuario = new Usuario(usuario, contraseña);
        this.usuarios.push(nuevoUsuario);
        this.guardarUsuarios(); // Guardar usuarios en almacenamiento local
    }

    // Iniciar sesión con un usuario y contraseña ingresado por el prompt 
    login(usuario, contraseña) {
        for (let i = 0; i < this.usuarios.length; i++) {
            let user = this.usuarios[i];
            if (user.usuario === usuario && user.contraseña === contraseña) {
                this.usuarioActual = user;
                return true; // Login exitoso
            }
        }
        return false; // no se genera el ingreso 
    }
    // Guardar usuarios en almacenamiento local
    guardarUsuarios() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }

    // Cerrar sesión
    logout() {
        this.usuarioActual = null; // Ningún usuario logueado
    }


    // Cargar usuarios desde el almacenamiento local
    cargarUsuarios() {
        let usuarios = localStorage.getItem('usuarios');
        return usuarios ? JSON.parse(usuarios) : []; // Si hay usuarios guardados, cargarlos; si no, retornar un arreglo vacío
    }

    // se Calcula la distribución de los ingresos
    calculateDistribution(income) {
        let distribution = {
            fixedExpenses: income * 0.50,
            savings: income * 0.30,
            emergency: income * 0.10,
            enjoy: income * 0.10
        };
        return distribution;
    }

    // Mostrar la distribución de los ingresos
    showDistribution(income) {
        let distribution = this.calculateDistribution(income);
        console.log(`Gastos Fijos: ${distribution.fixedExpenses}`);
        console.log(`Ahorros: ${distribution.savings}`);
        console.log(`Emergencias: ${distribution.emergency}`);
        console.log(`Gastos para Gustos: ${distribution.enjoy}`);
    }
}

// Ejemplo de uso del programa inciial 
let sistema = new SistemaAhorro();

// Se solicitan los datos 
let usuario = prompt('Ingresa tu usuario:');
let contraseña = prompt('Ingresa tu contraseña:');

// se registra y se hace el login, si no funciona sale login fallido 
sistema.registrar(usuario, contraseña);
if (sistema.login(usuario, contraseña)) {
    console.log('Login exitoso');
    let ingresos = parseFloat(prompt('Ingresa tus ingresos fijos mensuales:'));
    sistema.mostrarDistribucion(ingresos);
} else {
    console.log('Login fallido');
}




