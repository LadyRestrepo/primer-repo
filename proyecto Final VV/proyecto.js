class Usuario {
  constructor(username, password) {
      this.username = username;
      this.password = password;
  }
}

class SistemaAhorro {
  constructor() {
      this.usuarios = this.cargarUsuarios();
      this.usuarioActual = null;
  }

  registrar(username, password) {
      let usuario = new Usuario(username, password);
      this.usuarios.push(usuario);
      this.guardarUsuarios();
  }

  login(username, password) {
      let usuario = this.usuarios.find(user => user.username === username && user.password === password);
      if (usuario) {
          this.usuarioActual = usuario;
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

// Registrar y hacer login de un usuario
sistema.registrar('usuario1', 'password123');
if (sistema.login('usuario1', 'password123')) {
  console.log('Login exitoso');
  let ingresos = prompt('Ingresa tus ingresos fijos mensuales:');
  sistema.mostrarDistribucion(ingresos);
} else {
  console.log('Login fallido');
}
