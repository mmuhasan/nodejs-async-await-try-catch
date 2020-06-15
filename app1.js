const fns = require('./function.js');

const funcCall = async () =>{
    try{
        let x = await fns.PromiseReturnErrorValue(2000,7);
        console.log("Function return: "+x);
    } catch(error){
        console.log("Error name: `"+ error.name + "`. Error message: `"+error.message+"`");
    }
}
fns.counter(5);
funcCall();
