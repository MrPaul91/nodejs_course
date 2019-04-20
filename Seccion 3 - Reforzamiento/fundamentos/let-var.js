//Let y var hacen lo mismo -> Declaran una variable. pero la forma en que esa variable vive es diferente.
/*
var nombre = 'wolverine';

if (true) {
    var nombre = 'Magento';
}


console.log(nombre);*/


let nombre = 'wolverine';

if (true) {
    let nombre = 'Magento';

    console.log(nombre);
}

//var nombre = "wolverine1";


console.log(nombre);


/*
for (let i = 0; i <= 5; i++) {

    console.log("i " + i);
*
}*/


//Cuando i vale 6 ya no cumple la condicion y se sale

//Pero i mantiene el valor por el var.
//console.log(i);


//
let i = 2;


//let i crea un ambito especial, esta i solo vive entre llaves.

for (let i = 0; i <= 5; i++) {

    console.log("i " + i);

}

//i solo existe en ese scope por tanto dara error. Solo ahi trabaja i.
console.log(i);