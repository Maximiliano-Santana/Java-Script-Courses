export function* getId() {
    let michi = 1;
    while (true) {
        yield michi;
        michi++;
    }
}

const id = getId();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);