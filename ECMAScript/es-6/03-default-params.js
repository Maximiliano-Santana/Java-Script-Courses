function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 18;
    var country = country || 'Mexico';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'Colombia');

function newAdmin(name = 'Oscar', age = 32, country = 'Chile') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'Peru')