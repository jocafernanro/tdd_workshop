const fizzbuzz = require("./fizzbuzz");

describe("when calling fizzbuzz", () => {
  test("Should return the given value if the value is of number type and greater than 0", () => {
    const expected = 20;
    const result = fizzbuzz(20);
    expect(result).toBe(expected);
  });

  test("Should return an error message if the value is not of number type or greater than 0", () => {
    const expected = "Error, the value must be greater than 0";
    const result = fizzbuzz(0);
    expect(result).toBe(expected);
  });

  test("Should return fizz if the given value is 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(result).toBe(expected);
  });

  test("Should return fizz if the given value is multiple of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(result).toBe(expected);
  });
});
