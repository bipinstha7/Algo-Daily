const alphabetSoup = require('../src/alphabetSoup')

describe('AlphabetSoup', () => {
	it('should return words in a given string alphabetically', () => {
		const result = alphabetSoup('coderbyte')
		expect(result).toEqual('bcdeeorty')
	})
})
