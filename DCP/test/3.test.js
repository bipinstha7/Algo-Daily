const {find} = require('../Algorithms/3.lowestpositiveinteger');

describe('lowest positie number', () => {
  it('should return lowest positive number that does not exist in a given array', () => {
    // const arr = [1, 2, 0];
    const arr = [3, 4, -1, 1]
    const result = find(arr);
    expect(typeof result).toBe('number');
    expect(result).toBe(2);
  });
});