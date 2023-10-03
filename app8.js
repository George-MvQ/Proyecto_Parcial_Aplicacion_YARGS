//Ejercicio - crear una tabla desde linea de comandos
//Ejemplo escribir en la linea de comandos  node app8 --base=19
const { crearArchivo } = require('./helpers/multiplicar3')


console.clear();

//CAPTURANDO EL TERCER ARGUMENTO,se ingersa en consola app8 --base=5
const [, , arg3 = 'base5'] = process.argv;
const  [, base=5]=arg3.split('=')

//ok
//Esta destructuracion esta capturando por posicion eso es un inconveniente 
//Se puede comprobar sin argumentos node app8
//Esto tiene muchos inconvenientes ya que acepta cualquier tipo de parametnos. 
//Por ejemplo node app8 --limite=40 --base=10 , hace la tabla del 40 por ejemplo


//-----
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err =>console.log(err))

//Para corner el app8 es necesario ingresar lo siguiente node app8 --base=12 en consola.
//Por ejemplo si utilizamos en linea de comandos node --help tengo un manual completo de ayuda 
//Esto lopodemos aplicar para hacer un manual para el uso de nuetra propia apliacion 
//Todo esto es bueno pensarlo para validar nuestra aplicacion



