const oddOrEven = require("./oddOrEven");

describe("when calling oddOrEven", () => {
  test("should return odd then when the given param is [1]", () => {
    const expected = "odd";
    const result = oddOrEven([1]);
    expect(result).toBe(expected);
  });

  test("should return odd then when the given param is [0, 1, 4]", () => {
    const expected = "odd";
    const result = oddOrEven([0, 1, 4]);
    expect(result).toBe(expected);
  });
});
