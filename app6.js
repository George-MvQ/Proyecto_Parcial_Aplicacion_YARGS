/* Ejercicio - conversion a funcion promesa a Async en multiplicar3.js
----------------- MEJORANDO EL CODIGO OPCION 2----------------------
Aca se manda a llamar la destructuracion de multiplicar3.js
que ahora ya tiene permisos para importar crearArchivo
se transformo la promesa en una funcion tipo Async una funcion Asincrona
para que se ejecute mas optimamente que la prometa.
Esta funcion Async maneja el exito con el try y el error con catch */

const { crearArchivo } = require('./helpers/multiplicar3')

/* Se creo la carpeta helpers para crear toda la logica 
de la aplicacion en un archivo dentro de esta carpeta llamado
multiplicar.js
 */


console.clear();

const base = 2

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))


/* El proyecto posterior trata de crear documentacion y poder trabajar desde la consola
esta aplicacion es decir, que por ejemplo en la linea comandos se ingresa
lo siguiente: node app7  --base=9 limit=12 , entonces hara las tablas 
del 9 al 12 por ejemplo.Tambien se puede usar para saber informacion de la app7 
por ejemplo su version o banderas que se pueden utilizar en la aplicacion. */


