const oddOrEven = require("./oddOrEven");

describe("when calling oddOrEven", () => {
  test("should return undefined if no given param", () => {
    const expected = undefined;
    const result = oddOrEven();
    expect(expected).toBe(result);
  });
});
