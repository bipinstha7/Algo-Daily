const firstFactorial = require('../src/factorial')

describe('firstFactorial', () => {
    it('should return factorial of a given number: METHOD 1', () => {
      const result = firstFactorial(4)
      expect(result).toBe(24)  
    })
})