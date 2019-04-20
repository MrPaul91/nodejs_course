//Funcion asyncrona


//Cuando colocamos async, el resultado es transformado en una promesa :)
let getNombre = async() => {

    //  throw new Error('No existe un nombre para ese usuario');
    return "Fernando";
}


//Esto es lo mismo que.


let getNombre1 = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Fernando');

            console.log('hola');

        }, 7000)
    })

}



let saludo = async() => {

    let nombre = await getNombre1();

    console.log('Hola');

    return ` Hola ${nombre}`;
}

saludo().then(
    info => {
        console.log(info);
    },
    error => {
        console.log(error);
    }
);




//getNombre().then(nombre => console.log(nombre)).catch(e => console.log('Error de ASYNC', e);