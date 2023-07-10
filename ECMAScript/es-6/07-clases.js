//class User {}; // Asi se declara una nueva clase
//const newUser = new User(); // Con esto se crea una instancia de la clase user

class User {
    // declarando metodos dentro de la clase 
    greeting() {
        return 'Hello';
    }
};

const gndx = new User();
console.log(gndx.greeting());

const developer = new User();
console.log(developer.greeting());

// constrictor 

class user {
    //constructor
    constructor() {
        console.log('nuevo usuairo');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }

    // metodos 
    speak() {
        return ('Hello');
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const pedro = new user('Pedro');
console.log(pedro.greeting());

// setters and getters

class user {
    //constructor
    constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //metodos 
    speak() {
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new user('Micho', 18);
23
console.log(bebeloper.uAge);

console.log(bebeloper.uAge = 20);