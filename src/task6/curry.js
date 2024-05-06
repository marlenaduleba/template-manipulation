function curry(func, arity = func.length) {
  return (function nextCurried(prevArgs) {
    return function (arg) {
      let args = [...prevArgs, arg];
      if (args.length >= arity) {
        return func(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
}

module.exports = curry;
