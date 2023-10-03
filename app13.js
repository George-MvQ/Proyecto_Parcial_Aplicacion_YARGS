/**
 * Ejercicio - Configuración de Yargs Independiente
 * Utilizará el multiplicar4.js que tendrá la opción
 * para aceptar de parámetro de bandera -1 --listar
 */

/**
 * Se cortó toda la lógica de Yargs y se pasó a la carpeta que se creo llamada
 * "config" dentro de config se creo un archivo llamado yargs.js por lo tanto
 * en este archivo app13.js se hace un requiere a yargs que esta en la carpeta 
 * antes mencionada
 */

const { crearArchivo } = require('./helpers/multiplicar4')
const argv = require('./config/yargs') //Se requiere el archivo yargs.js que esta en config
//Pero se iguala a un objeto llamada argv para que no cambie ninguna lógica

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

/**
 * La aplicacion de este punto hace lo siguiente
 * crear la tabla del 66 y listarla node app12 --base=66 --listar
 * node app12 -b 66 -1
 * 
 * crear la tabla 66 sin imprimir en consola
 * node app13 -b 66
 * node app13 --base=66
 */

