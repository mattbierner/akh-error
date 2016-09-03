# Error Monad and Monad Transformer for [Akh Javascript Monad Library](https://github.com/mattbierner/akh)

The ErrorT transformer, `ErrorT`, adds error control to a monad. The base type, `Error`, provides error logic on its own.

```bash
# To use as standalone package
$ npm install --save akh.error

# To use as part of akh library
$ npm install --save akh
```

## Usage
The `ErrorT` and `Error` implement the [Fantasy Land][fl] monad, functor, and applicative functor interfaces.

<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

```js
// Error monad
require('akh.error').Error
require('akh').Error

// Error monad transformer
require('akh.error').ErrorT
require('akh').ErrorT
```

#### `Error.run(m, ok, err)`, `m.run(ok, err)`
Perform a error computation `m` and invoke `ok` if it succeeds and `err` if it fails.

```js
const c =
    Error.of(3)
        .map(x => -x);

Error.run(c, console.error, console.log); // logs: -3
```

#### `ErrorT.run(t, ok, err)`, `t.run(ok, err)`
Same as `Error.run` but for a monad transformer. Returns an `Error` value inside of the inner monad.


#### `Error.attempt(m, def)`, `m.attempt(def)`
Perform an error computation `m` and return the result if it succeeds and `def` if it fails.

#### `Error.try(m, e)`, `m.try(e)`
Perform an error computation `m` and return the result if it succeeds and invoke `e` if it fails


## Error Interface

#### `Error.fail(x)`
#### `ErrorT(m).fail(x)`
Construct a error value value. 


#### `Error.handle(f)`
#### `ErrorT(m).handle(f)`
Handle an error.


## Contributing
Contributions are welcome.

To get started:

```bash
$ cd akh-error
$ npm install # install dev packages
$ npm test # run tests
```

[fl]: https://github.com/fantasyland/fantasy-land

