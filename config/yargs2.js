/**
 * se agrega un describe para que en la ayuda del uso de la app co help
 * describa de mejor forma la aplicación
 */
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        //default: false, se quita ya que esta por defaul en la app principal
        describe: 'muestra la tabla con consola'
    })

    .check((argv, options) => {
        if (isNAN(argv.b)) {
            throw 'La base tiene que se ser un número'
        }
        return true;
    })
    .argv

module.exports = argv;
