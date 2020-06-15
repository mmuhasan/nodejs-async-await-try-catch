'use strict'

const MyError = require('./MyError');

const sleep = (ms) => new Promise( resolve => setTimeout(resolve,ms));

const PromiseReturnValue = async (tm,val) =>{
    console.log("function `PromiseReturnValue` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnValue` finish")
    return val-1;
}

const PromiseReturnErrorValue = async (tm,val) =>{
    console.log("function `PromiseReturnErrorValue` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnErrorValue` finish")
    throw new Error(val);
}

const PromiseReturnCustomeErrorValue = async (tm,val) =>{
    console.log("function `PromiseReturnCustomeErrorValue` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnCustomeErrorValue finish")
    throw new MyError(val);
}

const PromiseReturnResolveValue = async (tm,val) =>{
    console.log("function `PromiseReturnResolveValue` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnResolveValue` finish")
    return Promise.resolve(val-1);
}

const PromiseReturnRejectValue = async (tm,val) =>{
    console.log("function `PromiseReturnRejectValue` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnRejectValue` finish")
    return Promise.reject(val-1);
}

const PromiseReturnRejectError = async (tm,val) =>{
    console.log("function `PromiseReturnRejectError` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnRejectError` finish")
    return Promise.reject(new Error(val - 1 ));
}

const PromiseReturnRejectCustomeError = async (tm,val) =>{
    console.log("function `PromiseReturnRejectCustomeError` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnRejectCustomeError` finish")
    return Promise.reject(new MyError(val - 1 ));
}

const PromiseReturnRejectMultiuError = async (tm,val) =>{
    console.log("function `PromiseReturnRejectCustomeError` started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function `PromiseReturnRejectCustomeError` finish")
    if(val%2===0)
        return Promise.reject(new MyError(val - 1 ));
    else return Promise.reject(new Error(val-2));
}



const counter = async val=>{

    let i= 0;
    while(i++ <val){
        console.log(`${i}.`);
        await sleep(1000);
    }

};

module.exports = {
    PromiseReturnValue,
    PromiseReturnErrorValue,
    PromiseReturnCustomeErrorValue,
    PromiseReturnResolveValue,
    PromiseReturnRejectValue,
    PromiseReturnRejectError,
    PromiseReturnRejectCustomeError,
    PromiseReturnRejectMultiuError,
    counter
}