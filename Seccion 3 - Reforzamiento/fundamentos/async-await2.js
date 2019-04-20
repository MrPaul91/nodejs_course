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




let getEmpleado = async (id) => {

  //Necesitamos retornar una promesa.
  //Son una caracteristica del ECMA 6

  //3 Callback ?
  //El resolve se llama si la promesa es exitosa. Es decir si logra encontrar un empleado.
  //El reject es si no es exitoso.


    let empleadoDB =  empleados.find(empleado => empleado.id === id);

    if( !empleadoDB ){

         throw new Error(`No existe un empleado con el ID ${id}`);

    }else{
          //Solo podemos mandar un argumento. Si son varias cosas devuelva un objeto.
         return empleadoDB;

    }

}


let getSalario = async (empleado) => {


          let salarioDB = salarios.find(salarioE => salarioE.id === empleado.id);

          //Si no encontro un salarioDB.
          if(!salarioDB){
             throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`);
          }
          else{

             let empleadoConSalario = {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
             }

             return empleadoConSalario;
          }
}


let getMensaje = async (id) => {


     let empleado = await getEmpleado(id);
     let res = await getSalario(empleado);

     return `El salario de ${ res.nombre } es de ${ res.salario} $`;

}


getMensaje(4).then((res) => {
  console.log(res);
}).catch(err => console.log(err));
