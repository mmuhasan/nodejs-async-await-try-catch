'use strict'

const fns = require('./function.js');

const funcCall = async () =>{
    try{

        let x1 = fns.PromiseReturnValue(3000,10);
        let x2 = fns.PromiseReturnRejectError(5000,5);
        let x3 = fns.PromiseReturnRejectCustomeError(7000,19);

        let vals = await Promise.all([x1,x2,x3]);

        vals.forEach((val,index) => {
            /**
             * This block will never execute, even though x1 return first before any of the 
             * error exception is thrown.
             */
            console.log(`Value of x${1} is ${val}`);            
        });

    } catch(err){
        if(err.name === 'MyError'){
            console.log('Custome Error is thrown');
        }
        if(err.name === 'Error'){
            /**
             * Only this error will be catch, since this will be thrown first. 
             * However, all three functions will finish execution, as they all started `individually`
             */
            console.log('System error is thrown');
        }
    }
}


fns.counter(10);
funcCall();
