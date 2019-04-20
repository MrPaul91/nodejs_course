//Funcion callback.

/*
setTimeout(function() {
    console.log('Hola mundo')
}, 3000);*/


//Esto es la misma que la anterior.
/*
setTimeout(() => {
    console.log('Hola mundo');
}, 3000);
*/


let getUserById = (id, callback) => {

    let usuario = {

        nombre: 'Fernando',
        /*    id: id*/

        id
    }

    //Cuando ya tenemos esta informacion. Supongamos que ya consultamos en la bd.

    if( id === 20){

      callback('El usuario con id= 20 no existe en la base de datos');
    }
    else{

      callback(null, usuario);
    }

}

///Usamos como primer parametro el error, en este caso un String, aca hay una buena pregunta para sebas.


//El primer argumento en null, quiere decir que no hay error.


//El asunto es para mi cual es el error.
getUserById(1, (err, usuario) => {

    if(err){
      return console.log(err);
    }
    console.log('El usuario de la base de datos es ', usuario);

});
