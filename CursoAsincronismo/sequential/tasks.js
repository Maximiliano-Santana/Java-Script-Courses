const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne(){
        try {
            //throw new Error('Problem');
            await sleep(4000);
            return 'One';
        } catch (error){
            console.log(error);
        }
    },
    async taskTwo(){
        try{
            await sleep(2000);
            return 'Two'
        } catch (error){
            console.log(error);
        }
        
    }
}