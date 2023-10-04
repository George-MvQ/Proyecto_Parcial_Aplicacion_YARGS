//George Moises Vasquez Quiche
const fs = require('fs')
const colors = require('colors')
const path = require('path')

//funcion que realiza las opreacion de multiplicacion
const Multiplicacion = (base, hasta) => {
    let salida = ''
    for (let i = 1; i <= hasta; i++) {
        salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
    }
    return salida
}

//cadana de texto que contiene el resultado 
const resultadoConsola = (base, hasta) => {
    return `${'================'.red.bold}
${'Tabla del: '.yellow.bold}${colors.red.bold('"' + base + '"')}
${'================'.red.bold}
${Multiplicacion(base, hasta)}${'---------------'.magenta}
${`del 1 al ${`"${hasta}"`.blue}`.yellow.italic}
`
}

//funcion que se encarga de guardar el resultado en un txt
const guardarTexto = (carpeta, base, salida) => {
    //comprovamos si la carpeta existe
    if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta);
    dirArchivo = path.join(carpeta, `tabla-${base}.txt`)
    fs.writeFileSync(dirArchivo, colors.strip(salida));
    return `tabla-${base}.txt`
}

//funcion principal para crear y mostara resultado 
const crearArchivo = async (opciones) => {
    try {
        let salida = resultadoConsola(opciones.base, opciones.hasta)
        if (opciones.listar) console.log(salida);
        return guardarTexto(opciones.ubicacion, opciones.base, salida)
    } catch (err) {
        throw err
    }
}

module.exports = { crearArchivo }