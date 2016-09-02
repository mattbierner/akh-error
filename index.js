"use strict"
const ErrorT = require('./trans/error');
const Error = require('./type/error');

module.exports = {
    ErrorT: ErrorT,
    Error: Error,

    trans: { error: ErrorT },
    type: { error: Error }
};
