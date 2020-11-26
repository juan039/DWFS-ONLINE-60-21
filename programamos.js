function solicitarDatos(intentos) {
    let contador = 0
    do {
        let usuario = prompt('Ingrese su usuario');
        let contrasenha = prompt('Ingrese su contraseña');
        var condition = validarDatos(usuario, contrasenha);
        contador++;
        console.log(contador);
    } while (condition && intentos > contador);
}


function validarDatos(user, password) {
    if (user == 'admin' && password == '123456') {
        console.log('datos correctos!');
        return false;
    } else {
        console.log('datos incorrectos');
        return true;
    }
}

solicitarDatos(3);
// for (let i = 0; i < 3; i++) {
//     solicitarDatos();
// }