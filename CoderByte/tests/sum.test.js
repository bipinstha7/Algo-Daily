const simpleAdding = require('../src/sum')

describe('Sum up to given number', () => {
	it('should return sum up to the given number', () => {
		const sum = simpleAdding(12)
		expect(sum).toBe(78)
	})
})
