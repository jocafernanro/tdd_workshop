const oddOrEven = require("./oddOrEven");

describe("when calling oddOrEven", () => {
  test("should return undefined if no given param", () => {
    const expected = undefined;
    const result = oddOrEven();
    expect(expected).toBe(result);
  });

  test("should return the value that comes from params", () => {
    const expected = 20;
    const result = oddOrEven(expected);
    expect(result).toBe(expected);
  });
});
