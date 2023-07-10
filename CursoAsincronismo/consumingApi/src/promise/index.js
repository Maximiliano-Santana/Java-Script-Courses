
const cow = 12;
 
const countCows = new Promise(function(resolve, reject){
    if(cow > 10){
        resolve(`We have ${cow} on the farm`);
    } else {
        reject(`We haven't enough cows`);

    }
})

countCows.then((result)=> {
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('finally');
})