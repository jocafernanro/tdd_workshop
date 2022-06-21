const fizzbuzz = require("./fizzbuzz");

describe("when calling fizzbuzz", () => {
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

  test("Should return buzz if the given value is 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(result).toBe(expected);
  });

  test("Should return buzz if the given value is multiple of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(result).toBe(expected);
  });

  test("Should return buzz if the given value is multiple of 3 and 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(result).toBe(expected);
  });

  test("Should return the number if the given value is no multiple of 3 and 5", () => {
    const expected = 17;
    const result = fizzbuzz(17);
    expect(result).toBe(expected);
  });
});
