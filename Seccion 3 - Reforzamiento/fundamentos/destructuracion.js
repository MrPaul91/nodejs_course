let deadpool = {

    name: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNombre: function(){

       return ` ${this.name}   ${this.apellido}  ${this.poder}`;
    }

}


console.log(deadpool.getNombre());
/*
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;*/

//Usando destructuracion

let { name, apellido, poder} = deadpool;

console.log(name);
console.log(apellido);


//Lo mismo.
/*
let deadpool = {

    name: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNombre(){

       return ` ${this.name}   ${this.apellido}  ${this.poder}`;
    }

}*/
