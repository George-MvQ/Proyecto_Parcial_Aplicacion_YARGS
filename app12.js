const { crearArchivo } = require('./helpers/multiplicar4')
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default:false
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            //NaN = Not a Number
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv

console.clear();
console.log(argv);
//Se envian dos argumentos el valor de base que es numérico y listar que es booleano
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err=> console.log(err))

/**
•	La aplicaciön en este punto hace lo siguiente
•	crear la tabla del 66 y listarla node appl2 --base=66 --listar
•	node appl2 -b 66 
*
•	crear la tabla 66 sin imprimir en consola
•	node appl2 -b 66
•	node appl2 --base=66 
*/

