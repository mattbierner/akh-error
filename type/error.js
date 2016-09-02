
"use strict"
const Identity = require('akh.identity').Identity
const ErrorT = require('../trans/error')

var id = x => x

var constant = x => () => x

/**
 * Error monad
 */
const Error = ErrorT(Identity)

/**
 * Perform a error computation.
 * 
 * @param m Error computation.
 * @param ok Success result completion.
 * @param err Failure result completion.
 */
Error.run = Error.prototype.run = (m, ok, err) =>
     Identity.run(ErrorT.run(m,
        x => Identity.of(ok(x)),
        x => Identity.of(err(x))))

/**
 * Perform a error computation with error handler.
 * 
 * @param m Error computation.
 * @param e Error handler that maps error value to result.
 */
Error.try = Error.prototype.try = (m, e) =>
    Error.run(m, id, e)

/**
 * Perform a error computation and if it fails, return a default value.
 * 
 * @param m Error computation.
 * @param def Value returned on error
 */
Error.attempt = Error.prototype.attempt = (m, def) =>
    Error.try(m, constant(def))

module.exports = Error
