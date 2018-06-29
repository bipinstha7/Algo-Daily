const {largestsum} = require('../Algorithms/2.largestsumofnonadjacentnumbers');

describe('largest sum of non adjacent numbers', () => {
  it('should return largest sum of non adjacent numbers', () => {
    const array = [2, 4, 6, 2, 5];
    // const array = [5, 1, 1, 5];
    const result = largestsum(array);
    expect(typeof result).toBe('number');
    expect(result).toBe(13);
  });
});