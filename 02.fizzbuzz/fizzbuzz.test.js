const fizzbuzz = require("./fizzbuzz");

describe("when calling fizzbuzz", () => {
  test("Should return undefined  when calling the function", () => {
    const expected = undefined;
    const result = fizzbuzz();
    expect(result).toBe(expected);
  });

  test("Should return the given value if the value is of number type", () => {
    const expected = 20;
    const result = fizzbuzz(20);
    expect(result).toBe(expected);
  });
});
