/**
 * Parte lógica de yargs, solo se cortó y pego acá por el momento
 * no tiene ningun cambio la lógica de yargs,js
 */

const argv =require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
 .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false
 })

 .check((argv, options) => {
    if (isNAN(argv.b)) {
        throw 'La base tiene que ser un numero'
    }
    return true;
 })
 .argv

 //Dando permisos de exportación a todo el programa por eso se aguala a argv el modele.exports
 module.exports = argv;