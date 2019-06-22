const countDuplicates = require('../src/count-number-of-duplicates')

describe('count number of duplicates', () => {
	it('should return 0', () => {
		const result = countDuplicates('abcde')
		expect(result).toBe(0)
	})

	it('should return 2', () => {
		const result = countDuplicates('aabbcde')
		expect(result).toBe(2)
	})

	it('should return 2', () => {
		const result = countDuplicates('aabBcde')
		expect(result).toBe(2)
	})

	it('should return 1', () => {
		const result = countDuplicates('indivisibility')
		expect(result).toBe(1)
	})

	it('should return 2', () => {
		const result = countDuplicates('Indivisibilities')
		expect(result).toBe(2)
	})

	it('should return 2', () => {
		const result = countDuplicates('aA11')
		expect(result).toBe(2)
	})

	it('should return 2', () => {
		const result = countDuplicates('ABBA')
		expect(result).toBe(2)
	})
})
