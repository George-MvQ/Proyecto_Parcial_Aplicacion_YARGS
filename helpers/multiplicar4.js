const fs = require('fs')
const colors = require('colors')

/*
* Se utiliza el modulo.exports para dar permiso a este archivo
* de exportar crearArchivo hasta el final de este archivo.
* Aqui esta agrgar el listar

* Se agrego a esta funcion el parametro listar=false por si el usuario 
* no envia la 1 se sobre entiende queno quiere imprimir
*/

const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = '';
        //Genera la tabla de lo que se envie en la base del 1 al 10 
        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
        }

        // Si viene el parametro listar es decir existe entonces imprime esto en consola
        // lo que s encuentra acumulado en la varible salida
        if (listar) {
            console.log('====================').green;
            console.log(' Tabla del:', green, colors.blue(base));
            console.log('===================='.green);
            console.log(salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}