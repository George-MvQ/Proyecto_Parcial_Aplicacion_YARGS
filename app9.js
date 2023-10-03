/*
•	Ejercicio - package.json - init - install - uninstall
•	Oando inicio al uso del paquete yars
*/

/*
* Utilizando NPM para hacer el siguiente ejercici visatar la pagina NPM
* sitio web: npmjs.com, estos paquetes ayudan a no reinventar la rueda
* pero hay que tener cuidado y buscar los mâs utilizas y seguros
* por ejemplo ver el paquete colors npmjs.com/package/colors y examiner su uso
* ¿Como lo instalo y cômo le digo a mi aplicaciôn que lo voy a utilizer?
* ¿Si comparto el côdigo como sabe la otra persona que paquete utilze y qué version?
* Cuando utilizamos paquetes de terceros debemos de preparar el proyecto.


1- npm init
* Para instalar los paquetes por defecto
* Si se quiere contestar a todo si se puede utilziar una bandera, 
* package name: dejar el nombre que le coloca o cambiarlo 
* versio: 0.0.1
* desciption: En una tabla de de multiplicar con archivo de texto 
* Entry point: app9.js
* test commando: se deja vacio, pero sirve para hacer pruebas unitarias y de integracion 
* git repository: dejar vacio
* keywords: vacio, pero sirve para que el usuario pueda buscar si aplicacion por estas palabras 
* author: Antonio Escobar 
* license: MIT
* Is this OK? Presionar enter
* Se genero dentro del proyecto el archivo package.json
*
*
*
*/


/*
*	Archivo PACKAGE.ISON
*	Examinar este archivo en su carpeta
*	version: no se puede regresar a versiones anteriores
*	Este archivo es el punto inicial de cualquier proyecto de NODE
*	y dice que comandos podesmos utilizar para operar la aplicacion por ejemplo
*	test
*	se agregar en script base3 = node app9.js --base=3
*	luego guardar y correr npm run base3
*	verificar que main: app9.js
*	npm run base3 

*/

const {crearArchivo} = require("./helpers/multiplicar3")

const argv = require('yargs').argv; //requerimientos de yars

console.clear()

console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base)

