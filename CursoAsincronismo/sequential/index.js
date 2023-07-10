//Sequentical form
const { taskOne, taskTwo } = require('./tasks.js');

async function main(){
    console.time('Time');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('Time');

    console.log('Task ', valueOne);
    console.log('Task ', valueTwo);
}

//parallel form

async function mainParallel(){
    console.time('Time');
    const results = await Promise.all([taskOne(), taskTwo()]) //it returns a array and execute all the functions parallel
    console.timeEnd('Time');
    
    console.log('Task ', results[0]);
    console.log('Task ', results[1]);
}

mainParallel();
