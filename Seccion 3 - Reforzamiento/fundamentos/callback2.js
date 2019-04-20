// Arreglo de objetos en javascript.

let empleados = [ {
   id: 1,
   nombre: 'Fernando'

},{
   id: 2,
   nombre: 'Melissa'
},{
   id: 3,
   nombre: 'Juan'
}

];

//console.log(empleados);


//Juan no tiene ningun salario.

let salarios = [{
   id: 1,
   salario: 1000
},
{
   id: 2,
   salario: 2000
}


];


//El callback que yo quiero llamar cuando ya tengo el id del usuario.

let getEmpleado = (id, callback) => {

    let empleadoDB =  empleados.find(empleado => empleado.id === id);

    if( !empleadoDB ){

         callback(`No existe un empleado con el ID ${id}`);

    }else{
         callback(null, empleadoDB);
         //Estar seguro que solo estamos llamando el callback una vez. Esto podria dar lugar a errores.
        // callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salarioE => salarioE.id === empleado.id);

    //Si no encontro un salarioDB.
    if(!salarioDB){
       callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    }
    else{

      console.log('Hola entro aca');

       let empleadoConSalario = {
          nombre: empleado.nombre,
          salario: salarioDB.salario,
          id: empleado.id
       }


       callback(null, empleadoConSalario);

    }

}

//Jugar con 1, 2 y 3.
getEmpleado(3, (err, empleado) => {

    if(err){

      return console.log(err);
    }

    //Una vez obtenga el empleado con el salario.

    getSalario(empleado, (err, resp) => {

        if(err){

           return console.log(err);

        }
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario} $`);

        //Si hubiese otro callback con la info del salario seguimos aca haciendo callbacks.
    });

});
