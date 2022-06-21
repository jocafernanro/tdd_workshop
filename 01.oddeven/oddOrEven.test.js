const oddOrEven = require("./oddOrEven");

describe("when calling oddOrEven", () => {
  test("should return the value that comes from params", () => {
    const expected = 20;
    const result = oddOrEven(expected);
    expect(result).toBe(expected);
  });

  test("should return odd then when the given param is 1", () => {
    const expected = "odd";
    const result = oddOrEven(1);
    expect(result).toBe(expected);
  });

  test("should return odd then when the given param is 3", () => {
    const expected = "odd";
    const result = oddOrEven(3);
    expect(result).toBe(expected);
  });

  test("should return even then when the given param is 2", () => {
    const expected = "even";
    const result = oddOrEven(2);
    expect(result).toBe(expected);
  });
});
