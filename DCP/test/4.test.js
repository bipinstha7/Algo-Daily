const {decode} = require('../Algorithms/4.numberofwaystodecode');

describe('Decode Message', () => {
  it('should return no. of ways to decode a given messsage', () => {
    const message = '123';
    const result = decode(message);
    expect(typeof result).toBe('number');
    expect(result).toBe(3);
  });
});