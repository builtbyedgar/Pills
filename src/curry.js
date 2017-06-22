
/**
 * Returns a curried equivalent of the provided function.
 *
 * REF: http://extralogical.net/articles/currying-javascript.html
 *
 * @param {Function} fn The function to curry.
 * @param {*} args The function arguments.
 * @return {Function} The curried function.
 * @example
 *
 *  const add5 = curry(add, 5)
 *  add5(2)  // 7
 *  add5(100)  // 105
 *
 *  NOTE: In this example curry don't make sense when we use ES6.
 *  const add5 = x => add(5, x)
 *  add5(100)  // 105
 *
 */

export default curry = (fn, ...args) => {
  const arity = fn.length

  const acc = function () {
    if (arguments.length > 0)
      args = [...args, Array.prototype.slice.call(arguments, 0)]

    if (args.length >= arity)
      return fn.apply(this, args)
    else
      return curry.apply(this, [fn, ...args])
  }

  return args.length >= arity ? acc() : acc
}