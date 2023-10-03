/**
* Se utiliza el modulo.exports para dar permiso a este archivo
* de exportar crearArchivo hasta el final de este archivo.
*/
//Funcion que tiene por obteto crear la tabla de la base sugerida y
//por default imprimira y genera la tabla del cinco, sino se ingresan el parametro base
const fs = require('fs');

const    crearArchivo =(base =5)=>{
    return new Promise((resolve, reject) =>{

        console.log('====================');
        console.log('Tabla del: ',base);
        console.log('====================');

        let salida = '';

        for (let i = 1; i <= 10; i++){
            salida += `${base} x ${i}=${base * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla ${base}.txt`,salida);

        console.log(`tabla-${base}.txt creado`);
    })
}

// module.exports es exclusivo de NODE no funciona de la del cliente es decir el navegador
// en el navegador se utiliza el export

module.exports = {
    crearArchivo
}