/*

Ejercicio - inicio de nuestro proyecto, crear una aplicacion que imprima en consola la tabla del cinco, 
trate de realizarla por sus medios y compare el resultado de su logica contra lo resuelta aca.


Hacer un programa un programa en consola que imprima la
Tabla del cinco de forma automatica 
5 x 1 = 5
5 x 2 =  10
5 x 3 =  15


5x10 = 50
*/
/**
 * Para ejecutar la aplicacion es necesario llevar la consola a la carpeta donde se encuentre este 
 * proyecto 04-fundamentos y ejecutar el siguiente
 * comando
 * 
 * node app
 * 
 * */

// La variable base sirve para indicar sobre que base vamos a realizar
// la tabla de multiplicar


let base = 5
console.clear()

const tabla = (base) => {
    let resultado = ''
    console.log(`------Tabla del ${base}------`);
    for (let i = 1; i <= 10; i++) {
        resultado = resultado + `${base} x ${i} = ${base * i} \n`;
    }

    return resultado
}

console.log(tabla(base));

//Mi primera version propuesta 
// console.clear();
// console.log('====================');
// console.log(' Tabla del: 5	');
// console.log('====================');
// for(let i = 1; i <= 10; i++){
// console.log(`${base} x ${i} = ${base * i}');
// }
