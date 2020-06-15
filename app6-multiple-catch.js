'use strict'

const fns = require('./function.js');

const funcCall = async () =>{
    try{
        let x = await fns.PromiseReturnRejectMultiuError(2000,7);
        console.log("Function return: "+x);
    } catch(error){
        if(error.name === 'MyError'){
            console.log('Custome Error is thrown');
        }
        if(error.name === 'Error'){
            console.log('System error is thrown');
        }
    }

    try{
        let x = await fns.PromiseReturnRejectMultiuError(2000,8);
        console.log("Function return: "+x);
    } catch(error){
        if(error.name === 'MyError'){
            console.log('Custome Error is thrown');
        }
        if(error.name === 'Error'){
            console.log('System error is thrown');
        }
    }

}


fns.counter(5);
funcCall();
