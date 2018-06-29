const { add } = require("../Algorithms/1.adduptok");

describe("1.adduptok", () => {
  it("should return true if given arry is additive to k", () => {
    const arr = [10, 15, 3, 7];
    const k = 17;
    const result = add(arr, k);
    expect(result).toBeTruthy();
  });

  it("should return false if given arry is not additive to k", () => {
    const arr = [10, 15, 3, 6];
    const k = 17;
    const result = add(arr, k);
    expect(result).toBeFalsy();
  });
});
