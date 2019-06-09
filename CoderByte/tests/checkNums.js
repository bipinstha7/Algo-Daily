const checkNumbers = require('../src/checkNumbers')

describe('Check Numbers', () => {
	it("should return 'true' if num2 > num1, return 'false' if num2 < num1 and return '-1' if num2 === num1", () => {
		const returnTrue = checkNumbers(5, 7)
		const returnFalse = checkNumbers(7, 5)
		const returnMinusOne = checkNumbers(5, 5)

		expect(returnTrue).toEqual('true')
		expect(returnFalse).toEqual('false')
		expect(returnMinusOne).toEqual('-1')
	})
})
