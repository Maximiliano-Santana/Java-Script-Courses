function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,2, sum)) 

function res(num1, num2){
    console.log(num1-num2);
}

setTimeout(res ,5000, 5,5);