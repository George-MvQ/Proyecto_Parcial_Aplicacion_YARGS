/* Ejercicio - Recibir informacion desde la linea de comandos
Aca se manda a llamar la destructuracion de multiplicacion3.js
Ejemplos de trabajar con linea de comandos por Ejemplos
nodemon-- - version
Se ejecuto e comando principal de nodemon y estamos enviando la bandera
----version la aplicacion sabe que hacer cuand se envia la bandera no se 
ejecuta el comando de nodemon si no que se ejecuta la informacion de la version
*/


const{crearArchivo}= require('./helpers/multiplicar3')

/* Codigo comentado para hacer el ejercicio de el process.argv
Que se quiere hacer que trabajemos con la linea de comandos para operar la aplicacion
por ejemplo ---base=3 --limite=10
Que pasa si yo en estos comentarios escribo node app6 --base=9
 */

console.clear();

//const base =2

//crearArchivo(base)
//  .then(nombreArchivo => console.log(nombreArchivo,'creado'))
//  .catch(err => console.log(err))

console.log(process.argv);//Imprime los proceso que vienen de la consola

/* Codigo comentado para hacer el ejercicio de el  procces.argv
Probar agregando en consola node app7 --base=5
'C:\\Users\\Thiago\\Desktop\\CursoNodeJS\\04-bases-node\\app7',
--bases=5
*/

//CAPTURANDO EL TERCER ARGUMENTO , se ingresa en consola node app7 --base=5
//ingresar en consolanode app7

//proces.argv = [ C:\\Program Files\\nodejs\\node.exe',
//  'C:\\Users\\vasqu\\OneDrive\\Escritorio\\04-base-node\\app7',
//  '-base=1']
console.log(process.argv[2])
const[, ,arg3='base5']=process.argv;
console.log(arg3)
const [, base = 5] = arg3.split('=') 

console.log(base);

//Se puede comprobar sin argumento node app7


/*
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err))

*/
/*
*	El proyecto posterior trata de crear documentacion y poder trabajar desde la consola
*	esta aplicacion es decir, que por ejemplo en la linea de comandos se ingresa
*	lo siguiente: node app7 --base=9 limit=12, entonces hara las tablas
*	del 9 al 12 por ejemplo. Tambien se puede usar para saber informacion de la App
*	por ejemplo su version o banderas que se pueden utilizar en la apliacion.
*/