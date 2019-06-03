const { firstFactorial, firstFactorial2 } = require('../src/factorial')

describe('firstFactorial', () => {
	it('should return factorial of a given number: METHOD 1', () => {
        const result = firstFactorial(4)
        expect(result).toBe(24)
    })
    
    it('should return factorial of a given number: METHOD 2', () => {
        const result2 = firstFactorial2(4)
        expect(result2).toBe(24)
	})
})
