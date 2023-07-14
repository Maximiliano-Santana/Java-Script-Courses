//Se limita el acceso de nuestros atributos y propiedades de nuestros objetos.

//Escondemos los metodos y atributos de forma privada, los cuales solo se pueden manipular y acceder desde dentro de los metodos que se encuentren en la misma clase. Esto no permite que los metodos y atributos sean manipulados desde fuera.

//En javascript todo es publico, por lo que no se pueden esconder lo metodos, lo que si se puede hacer es no permitir la alteracion de los metodos y atributos

//---------------------------Hay varias formas de aplicar el encapsulamiento---------------------------------
//----------------------------Getters y Setters
//Los getters y setters son metodos dentro de las clases los cuales nos van a retornar el valor deseado

//hay algunos lenguajes que nos permiten definir propiedades publicas y privadas con las palabras reservadas public y private, pero como en javascript no funcion asi hay que hacerlo de otra manera.

class Player{
    constructor({
        username, 
        id,
        inventory = [],
        heal = 10,
        hability = [],
    }){
        this._username = username; //Por convencion los atributos y metodos que no queremos que se llamen por fuera del prototipo, iran con un guion bajo al inicio 
        this.id = id;
        this.inventory = inventory;
        this.heal = heal;
        this.hability = hability;  
    }

    get username(){ //Creamos un get sirve para retornar el username 
        return(this._username)
    }

    set username(newName){ //Creamos el setter  para asignar el username y con una condicional para asegurarnos de que sea como queremos
        if(newName === ''){
            console.error('Nombre invalido')
        }else{
            this._username = newName;
        }
    }
}

const player = new Player ({
    username: 'MichiUwUr',
    id: 1,
    hability: ['Fire magic'],
})

console.log(player.username); //Llamamos al get username

player.username = '';//Llamamos al metodo para cambiar el nombre y le pasamos el nuevo nombre

console.log(player.username)

//------------Namespaces

//------------Object.definePropierties

//---------------------------Modulos de ES6

function atack (){
}
function sheathe (){
}


class Sword {
    constructor({
        name,
        damage = 1,
    }){
        this.name = name;
        this.damage = damage;
    }

    
}