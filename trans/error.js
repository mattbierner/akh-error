"use strict"
const spec = require('akh.core.spec')
const EitherT = require('akh.either').EitherT
const ErrorMonad = require('../spec/error')

/**
 * Error monad transformer.
 * 
 * @param m Base monad.
 */
const ErrorT = m => {
    var Instance = EitherT(m)
    
    ErrorMonad(Instance, {
        fail: Instance.left,
        
        handle: function(e) {
            return ErrorT.run(this, this.of, e)
        }
    })
    
    return Instance
}

/**
 * Perform an error computation with mapping functions.
 * 
 * @param m ErrorT computation.
 * @param ok Success completion function that maps left value to inner monad.
 * @param err Failure completion function that maps right value to inner monad.
 */
ErrorT.run = (m, ok, err) =>
    EitherT.either(m, err, ok)

module.exports = ErrorT
