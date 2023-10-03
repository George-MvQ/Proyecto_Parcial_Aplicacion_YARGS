
const { crearArchivo } = require('./helpers/multiplicar3')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
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
console.log(process.argv)//interno
console.log(argv);
console.log('base: yargs', argv.b);


/*
•	Uso de yargs , ver el nesultado de escribir ne consola
•	node	appl0	--base=5	--limite=10
•	node	appl0	--base=abc
•	node	appl0	-b 5
•	node	appl0
*
* Documentar que pasa en cada caso. de lo plantedo en las llneas anteriores 
*/

