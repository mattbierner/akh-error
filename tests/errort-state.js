"use strict"
const assert = require('chai').assert
const State = require('akh.state').State
const ErrorT = require('../index').ErrorT

const runState = function (c, s) {
    return State.run(
        ErrorT.run(c, function (x) {
            return State.of(x)
        },
            function (x) {
                return State.of(null)
            }),
        s)
}

const M = ErrorT(State)


describe('ErrorT', () => {
    it("simple_of", () => {
        const c = M.of(3)

        assert.deepEqual(
            runState(c, 's'),
            { value: 3, state: 's' })
    })

    it("simple_chain", () => {
        const c = M.of(1)
            .chain(function (x) {
                return M.of(x + 1)
            })

        assert.deepEqual(
            runState(c, 3),
            { 'value': 2, 'state': 3 })
    })

    /*
    
    it("many_chain", () => {
        const c = M.of(0)
        
        for (const i = 0 i < 10000 ++i) {
            c = c.chain(function(x) {
                return M.of(x + 1)
            })
        }
    
        assert.deepEqual(
            runState(c, 3),
            {value: 10000, state: 3})
    })
    
    
    it("lift", () => {
        const c = M.lift(State.get)
            .chain(function(x) {
                return M.of(x + 1)
            })
        
        assert.deepEqual(
            runState(c, 3),
            {value: 4, state: 3})
    })
    */
})