const user = { username: 'gndx', age: 21, country: 'MX' }

const { username, ...values } = user;

console.log(username);
console.log(values);