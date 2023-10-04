//George Moises Vasquez Quiche
const {crearArchivo} = require (`./helpers/multiplicar5`)
const colors = require ('colors')
const argv = require('./config/miYargs')


console.clear();

const opciones ={
    base: argv.b,
    listar: argv.l,
    hasta: argv.h,
    ubicacion: argv.d
}

crearArchivo(opciones)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado','y guardado en:'.rainbow,argv.d.rainbow))
    .catch (err => console.log(err));
