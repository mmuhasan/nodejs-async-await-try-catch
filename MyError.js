'use strict'

class MyError extends Error {
    constructor(message) {
      super(message);
     // Ensure the name of this error is the same as the class name
      this.name = this.constructor.name;
     // This clips the constructor invocation from the stack trace.
     // It's not absolutely essential, but it does make the stack trace a little nicer.
     // it stact trace exactly when it is called.
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = MyError;