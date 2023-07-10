function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Micho', 'Pau', 'Danna', 'Francisco']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);