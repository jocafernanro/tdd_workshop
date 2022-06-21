const fizzbuzz = require("./fizzbuzz");

describe("when calling fizzbuzz", () => {
  test("Should return undefined  when calling the function", () => {
    const expected = undefined;
    const result = fizzbuzz();
    expect(result).toBe(expected);
  });
});
