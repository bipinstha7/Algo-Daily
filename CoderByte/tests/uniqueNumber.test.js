const findUnique = require('../src/uniqueNumber')

describe('unique number', () => {
    it('should return 2', () => {
    	const result = findUnique([ 1, 1, 1, 2, 1, 1 ])
    	expect(result).toBe(2)
    })

    it('should return 0.55', () => {
    	const result = findUnique([ 0, 0, 0.55, 0, 0 ])
    	expect(result).toBe( 0.55)
    })
})