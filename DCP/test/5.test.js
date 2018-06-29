const { multipleOfArray } = require("../Algorithms/5.returnanewarray");

describe("New Array", () => {
  it("should return a new array with a product of all other numbers", () => {
    const array = [1, 2, 3, 4, 5];
    const result = multipleOfArray(array);
    expect(result).toEqual([120, 60, 40, 30, 24]);
  });
});
