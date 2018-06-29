const { returnMatchedString } = require("../Algorithms/6.returnmatchedstring");

describe("Matched String", () => {
  it("should return a matched string from a given array/string", () => {
    const array = ["dog", "deer", "deal"];
    const match = "de";

    const result = returnMatchedString(array, match);

    expect(typeof result).toBe("string");
    expect(result).toContain("deer");
    expect(result).not.toContain("dog");
  });
});
