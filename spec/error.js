"use strict"

/**
 * Error monad interface
 */
const ErrorMonad = (Instance, spec) => {
    Instance.fail = Instance.prototype.fail = spec.fail
    
    Instance.prototype.handle = spec.handle
    Instance.handle = (m, e) => m.handle(e)
}

module.exports = ErrorMonad
