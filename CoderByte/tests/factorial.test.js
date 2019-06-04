const { factorial, factorial2 } = require('../src/factorial')

describe('firstFactorial', () => {
	it('should return factorial of a given number: METHOD 1', () => {
        const result = factorial(4)
        expect(result).toBe(24)
    })
    
    it('should return factorial of a given number: METHOD 2', () => {
        const result2 = factorial2(4)
        expect(result2).toBe(24)
	})
})
