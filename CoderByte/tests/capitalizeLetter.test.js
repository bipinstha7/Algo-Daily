const capitalizeLetter = require('../src/capitalizeLetter')

describe('Capitalize Letter', () => {
	it('should return string with every first letter of a word capitalize', () => {
		const result = capitalizeLetter('hello world')
		expect(result).toEqual('Hello World')
	})
})
