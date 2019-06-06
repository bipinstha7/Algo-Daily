const letterChanges = require('../src/changeLetter')

describe('Change Letter', () => {
	it('should return letters with each next char and capital vowel letters', () => {
		const result = letterChanges('hello')
		expect(result).toEqual('Ifmmp')
	})
})
