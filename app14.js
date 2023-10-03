/**
 * Ejercicio - configurar la documentacion de la aplicacion
 * para utilizarla se aplica el comando node --help
 * Utilizará el multiplicar4.js que tendrá la opcion
 * para aceptar de parámetro la bandera -l --listar
 * 
 * Utilizará el YARGS 2 que tiene una modificación en una
 * mejor descripcion en las bandera a la hora de utilizar
 * el help
 */

/**
 * Se cortó toda la lógica de Yargs y se pasó a la carpeta que se creo llamada
 * "config" dentro de config se creo un archivo llamada yargs.js por lo tanto
 * en este archivo app13.js se hace un require a yargs que esta en la carpeta
 * entes mencionada
 */

const { crearArchivo } = require('./helpers/multiplicar4')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))