Error monad transformer for [Akh Javascript Monad library](https://github.com/mattbierner/akh)

The ErrorT transformer, `ErrorT`, adds error control to a monad. The base type, `Error`, provides error logic on its own.

The `ErrorT` and `Error` is a monad, functor, and applicative functor.

```js
// Error monad
require('akh.error').Error
require('akh').Error

// Error monad transformer
require('akh.error').ErrorT
require('akh').ErrorT
```

## Running

#### `Error.run(m, ok, err)`
Perform a error computation `m` and invoke `ok` if it succeeds and `err` if it fails.

```js
const c = Error.of(3)
        .map((x) => -x);

Error.run(c, console.error, console.log); // logs: -3
```

#### `ErrorT.run(m, ok, err)`
Same as `Error.run` but for a monad transformer. Returns an `Error` value inside of the inner monad.



## Error Interface

#### `Error.fail(x)`
#### `ErrorT(m).fail(x)`
Construct a error value value. 


#### `Error.handle(f)`
#### `ErrorT(m).handle(f)`
Handle an error.
