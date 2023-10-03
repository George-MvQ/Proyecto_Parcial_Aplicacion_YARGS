// Ejercicio Requerir paquete internos 
//  Exportar archivos a nuestro proyecto utilizando wriFile

const fs = require ('fs'); // requiere para poder operar archivos

/**

* En este ejercicio se desea evolucionar la aplicacion para que
* se puede imprimir cualquier base para la tabla de multiplicar
* y luego de imprimir en consola se genere un archivo .txt con
* el nombre de la tabla y sus datos.
* Para poder crear y guardar datos en un archivo es neceario utilizar
* el paquete interno File Sistem (fs) y el metodo writeFile


Algo interasante interesante de NODE es que podemos operar archivos es decir podemos
// crear, nodificar y eliminar archivos por medio de NODE
 
*/

const base = 14;
let salida = '';


console.clear();
console.log('====================');
console.log(` Tabla del: ${base}`);
console.log('====================');


for(let i = 1; i <= 10; i++){
    salida +=`${base} x ${i} = ${base * i}\n`;

};

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;
    console.log(`tabla-${base}.txt creado con writeFile`);
})

