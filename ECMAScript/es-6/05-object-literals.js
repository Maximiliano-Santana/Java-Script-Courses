// enahched object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('gndx', 34, 'Mx', 1));