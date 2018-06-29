const { staircase } = require("../Algorithms/7.staircaseproblem");

describe('Staricase', () => {
  it('should return number of steps to climb the staircase', () => {
    const N = 4;
    const result = staircase(N);
    expect(result).toBe(5);
  });
});