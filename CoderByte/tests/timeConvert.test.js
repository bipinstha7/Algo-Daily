const timeConvert = require('../src/timeConvert')

describe('Convert given seconds in to hour:minutes', () => {
	it('should return hour:minute based time format', () => {
		const result1 = timeConvert(45)
		const result2 = timeConvert(126)

		expect(result1).toEqual('0:45')
		expect(result2).toEqual('2:6')
	})
})
