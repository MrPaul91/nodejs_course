console.log('Inicio del programa');
////CICLO DE EVENTOS EN NODE.

//Los SetTimeOut son funciones que ejecutan algo en un determinado tiempo.

//Ese algo se conoce como un callback.

///A los 3 segundos.
setTimeout(function() {

    console.log('Primer Timeout');

}, 3000)


setTimeout(function() {

    console.log('Segundo Timeout');

}, 0)


setTimeout(function() {

    console.log('Tercer Timeout');

}, 0)


console.log('Fin del programa');


///El primer setTimeOut , no se ejecuta inmediatamente, porque estamos diciendo que lo ejecute en 3 segundos.
/* El segundo timeOut no lo hace inmediatamente

*/