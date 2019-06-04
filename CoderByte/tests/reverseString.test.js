const reverseString = require('../src/reverseString')

describe('Reverse String', () => {
	it('should reverse the given string', () => {
		const result = reverseString('Hello World and Coders')
		expect(result).toEqual('sredoC dna dlroW olleH')
	})
})
