
class user {
    constructor(name, age) {
            this.name = name;
            this.age = age;
        } 
    #speak() { // Con el '#' se vuelve privado, y solo puede ser acedido dentro de la misma clase
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper = new user('Micho', 18);
23
console.log(bebeloper.uAge);

console.log(bebeloper.uAge = 20);