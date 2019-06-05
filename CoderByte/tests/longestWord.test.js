const longestWord = require('../src/longestWord')

describe('Longest word from a sentence', () => {
	it('should return a longest word from a given sentence', () => {
		const result = longestWord('fun&!! time')
		expect(result).toEqual('time')
	})
})
