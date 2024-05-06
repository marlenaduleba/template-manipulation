const curry = require("../curry");

describe("curry function", () => {
  const add = (x, y, z) => x + y + z;
  const curriedAdd = curry(add);

  test("returns a function", () => {
    expect(typeof curriedAdd).toBe("function");
  });

  test("curries a function and returns the correct result after all arguments are provided", () => {
    expect(curriedAdd(1)(2)(3)).toBe(6);
  });

  test("handles multiple arguments passed in a single function call", () => {
    const curriedMultiply = curry((a, b, c, d) => a * b * c * d, 4);
    const partialMultiply = curriedMultiply(2);
    expect(partialMultiply(3)(4)(5)).toBe(120); // Partial application test
  });

  test("handles full arguments in single steps", () => {
    const fullAdd = curriedAdd(1)(2)(3);
    expect(fullAdd).toBe(6);
  });
});
