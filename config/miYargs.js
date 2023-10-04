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
        default: false,
        describe: 'muestra la tabla con consola'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        demandOption: false,
        default: 10,
        describe:'Define un limite hasta donde se multiplica'
    })
    .option('d',{
        alias: 'direccion',//guardar
        type:'string',
        demandOption: false,
        default: 'salida', 
        describe:'define la direccion a guradar'
    })
    
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'La base tiene que se ser un número'
        
        return true;
    })
    .argv

module.exports = argv;