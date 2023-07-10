//Crear primer objeto literal

const objetoLiteral = { //Se inicializa objeto literal
    name:'Thing', //Se le asignan los atributos del objeto
    type:'Magic',
    power:500,
    atacks: [ 
        'levitation',
        'fire',
        'wind'
    ],

    newAtack(newAtack){ //Se asignan metodos nuevos al objeto
        this.atacks.push(newAtack); //palabra reservada this hace referencia al mismo objeto en el que se encuentra el metodo, se utiliza para hacer referencia a un atributo dentro del mismo objeto
    },

    levitate(){
        console.log('levitate atack!')
    }

};

objetoLiteral.atacks.push('water');

objetoLiteral.name = 'Ring of force'


objetoLiteral.newAtack('Wind');


//Crea primer prototipo 
// un prototipo en JavaScript es un objeto que actúa como una plantilla o molde para crear otros objetos. Se define como un objeto base del cual otros objetos pueden heredar propiedades y métodos.

function Item(name, type, power, atack){ //Se inicializa el prototipo
    this.name = name; //Se asignan los atributos con los 
    this.type = type;
    this.power = power;
    this.atack = atack;
    // this.newAtack = function (atack) {  //Forma para crear metodos dentro de los prototipos
    //     this.atack.push(atack);
    // }

}

Item.prototype.newAtack = function (atack){//Esta es la otra forma de la que se puede crear metodos de un prototipo desde fuera del prototipo
    this.atack.push(atack)
}

const IceSword = new Item('iceSword', 'Mele', 500, ['blade sword',]); //Se crea la instancia/objeto a partir del prototipo con la palabra reservada new

IceSword.newAtack('Ice Spickes'); //Dentro de la propiedad __proto__ esta el metodo newAtack por eso es utilizable aunque no sea visible

//Crear prototipos con la sintaxis de clases 
//Javascript esta bsado en prototipos y las clases solo son una sintaxis mas amigable para trabajar con prototipos

class ItemClass {

    constructor (name, type, power, atack) { //El metodo constructor es el que asigna los atributos del objeto y funciona de la misma manera que se asignan los atributos en un prototipo pero dentro de la funcion constructor
        this.name = name; 
        this.type = type;
        this.power = power;
        this.atack = atack;
    }

    addAtack(atack){ //los metodos se crean de esta manera
        this.atack.push(atack);
    }
}

const MagicStone = new ItemClass('MagicStone', 'Magic', 5000, ['Electric']);

MagicStone.addAtack('Fire');


//Una gran desventaja de la sintaxis anterior es que hay que memorizar la posicion de los parametros para que se asigne correctamente y si no se desea agregar uno se tendria que poner como nulo, esto quita tiempo y lo hace algo complicado, por lo que se presenta la siguiente solucion llamada RORO : Recibe Objet , Return Object.
//Consta de en vez de recibir varios parametros, recibir un objeto como parametro de la siguiente manera

class ItemClass2 {

    constructor ({ //Indicamos que vamos a recibir un objeto 
        name,
        type,
        power,
        atack = [], //Se asigna como parametro predeterminado por si no se recive ninguno
    }) { 
        this.name = name; 
        this.type = type;
        this.power = power;
        this.atack = atack;
    }
}

const Emerald = new ItemClass2({ //Al crear una instancia, se envia un objeto literal
    name: 'Emerald',
    type: 'Money',
    power: 0,
})

console.log(Emerald);

//Ventajas y desventajas de todo lo anteriormente aprendido 

