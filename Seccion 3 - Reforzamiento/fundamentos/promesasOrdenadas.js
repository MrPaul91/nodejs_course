// Arreglo de objetos en javascript.

let empleados = [{
        id: 1,
        nombre: 'Fernando'

    }, {
        id: 2,
        nombre: 'Melissa'
    }, {
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




let getEmpleado = (id) => {

    //Necesitamos retornar una promesa.
    //Son una caracteristica del ECMA 6

    //3 Callback ?
    //El resolve se llama si la promesa es exitosa. Es decir si logra encontrar un empleado.
    //El reject es si no es exitoso.
    return new Promise((resolve, reject) => {
        console.log()

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {

            reject(`No existe un empleado con el ID ${id}`);

        } else {
            //Solo podemos mandar un argumento. Si son varias cosas devuelva un objeto.
            resolve(empleadoDB);

        }
    });
}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salarioE => salarioE.id === empleado.id);

        //Si no encontro un salarioDB.
        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);


        } else {

            let empleadoConSalario = {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }

            resolve(empleadoConSalario);


            console.log('otra linea despues');

        }
    });
}

/////ENCADENAR PROMESAS !!!



//Como puedo estar pendiente de que encontro un empleado o sucedio algun error -> Usar Then.
getEmpleado(10).then(empleado => {

        //Sabemos que esto retorna una promesa. Entonces despues le puedes hacer un .then
        return getSalario(empleado);

    }).then(res => {
        console.log(`El salario de ${ res.nombre } es de ${ res.salario} $`);
    })
    .catch(error => {

        console.log(error);

    });