// let numero = 10;
// switch (numero) {
//     case 1:
//         console.log('el número ingresado es 1')
//         break;
//     case 2:
//         console.log('el número ingresado es 2')
//         break;
//     case 3:
//         console.log('el número ingresado es 3')
//         break;
//     default:
//         console.log('el número ingresado no está en las opciones')
//         break;
// }
// let fruta_a_ordenar = prompt('ingrese la fruta que desea llevar')
// switch (fruta_a_ordenar) {
//     case 'Naranja':
//         console.log('la fruta a ordenar es $60 '+ fruta_a_ordenar)
//         break;
//     case 'Pera':
//         console.log('la fruta a ordenar es $40'+ fruta_a_ordenar)
//         break;
//     case 'Manzana':
//         console.log('la fruta a ordenar es $50'+ fruta_a_ordenar)
//         break;
//     default:
//         console.log('No tenemos inventario de dicha fruta')
//         break;
// }

// Esta funcion multiplica dos numeros
// retorna un numero como resultado
function multiplicar(num1, num2) {
    return num1 * num2;
}
// let tabla = parseInt(prompt('ingrese el número de la tabla'))
// for (let i = 1; i < 10; i++) {
//     let resultado = multiplicar(i, tabla);
//     console.log(tabla + ' x ' + i + ' = '+ resultado);
// }

// Esta funcion retorna por console.log la tabla de multiplicar 
// del 1 al 9 del numero ingresado
function tabla() {
    let tabla = parseInt(prompt('ingrese el número de la tabla'))
    for (let i = 1; i < 10; i++) {
        let resultado = multiplicar(i, tabla);
        console.log(tabla + ' x ' + i + ' = '+ resultado);
    }
}
tabla();
// let nombre = prompt('ingrese su nombre');
// while (nombre != 'Juan') {
//     console.log('usuario incorrecto')
//     nombre = prompt('ingrese su nombre');
// }
// let constrasenha;
// do {
//     var constrasenha = prompt('Ingrese su contraseña')
    
// } while (constrasenha != '123456');



function decir_hola() {
    let nombre = prompt('Ingrese su nombre');
    let nombre_numero = parseInt(nombre);
    if (isNaN(nombre_numero)) {
        alert('hola '+ nombre)
    }
}

decir_hola()

