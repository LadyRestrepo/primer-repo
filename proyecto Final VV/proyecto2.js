class Usuario {
    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

class SistemaAhorro {
    constructor() {
        this.usuarios = this.cargarUsuarios();
        this.usuarioActual = null;
    }

    registrar(usuario, contraseña) {
        let nuevoUsuario = new Usuario(usuario, contraseña);
        this.usuarios.push(nuevoUsuario);
        this.guardarUsuarios();
    }

    login(usuario, contraseña) {
        let nuevoUsuario = this.usuarios.find(user => user.usuario === usuario && user.contraseña === contraseña);
        if (nuevoUsuario) {
            this.usuarioActual = nuevoUsuario;
            return true;
        }
        return false;
    }

    logout() {
        this.usuarioActual = null;
    }

    guardarUsuarios() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }

    cargarUsuarios() {
        let usuarios = localStorage.getItem('usuarios');
        return usuarios ? JSON.parse(usuarios) : [];
    }

    calcularDistribucion(ingresos) {
        let distribucion = {
            gastosFijos: ingresos * 0.50,
            ahorros: ingresos * 0.30,
            emergencias: ingresos * 0.10,
            gustos: ingresos * 0.10
        };
        return distribucion;
    }

    mostrarDistribucion(ingresos) {
        let distribucion = this.calcularDistribucion(ingresos);
        console.log(`Gastos Fijos: ${distribucion.gastosFijos}`);
        console.log(`Ahorros: ${distribucion.ahorros}`);
        console.log(`Emergencias: ${distribucion.emergencias}`);
        console.log(`Gastos para Gustos: ${distribucion.gustos}`);
    }
}

// Ejemplo de uso
let sistema = new SistemaAhorro();

// Solicitar datos del usuario mediante prompts
let usuario = prompt('Ingresa tu usuario:');
let contraseña = prompt('Ingresa tu contraseña:');

// Registrar y hacer login de un usuario
sistema.registrar(usuario, contraseña);
if (sistema.login(usuario, contraseña)) {
    console.log('Login exitoso');
    let ingresos = parseFloat(prompt('Ingresa tus ingresos fijos mensuales:'));
    sistema.mostrarDistribucion(ingresos);
} else {
    console.log('Login fallido');
}
