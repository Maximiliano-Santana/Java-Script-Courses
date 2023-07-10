//arrays destructuring

let fruits = ['apple', 'banana'];

let [a, b] = fruits;

console.log(a, fruits[1]);

//object destructuring

let user = { username: 'Oscar', age: 34 };
let { username, age } = user;

console.log(username, age);

//spread operator

let person = { name: 'Oscar', age: 28 }
let gato = { food: 'Pecao', lifes: 5 }
let country = 'Mx';

let data = {...person, ...gato }

console.log(data);

//rest 

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 6);