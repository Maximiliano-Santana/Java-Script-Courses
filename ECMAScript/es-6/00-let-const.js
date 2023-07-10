const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'kiwi';
        const fruit3 = 'banana';
    }

    console.log(fruit1); // var tiene un scope de funcion; es decir que es accesible desde cualquier punto de la funcion que fue declarada
    console.log(fruit2); // let y const tienen un scope de bloque, esto quiere decir que solo se puede acceder a ella cuando se esta dentro del mismo bloque, ya sea un if, switch, funcion, for, etc.
    console.log(fruit3);
}

fruits();