/**
 * Have the function FirstFactorial(num)
 * take the num parameter being passed and
 * return the factorial of it.
 * For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
 */

// METHOD 1
function firstFactorial(num) {
	let factorial = 1
	for (let i = 1; i <= num; i++) {
		factorial *= i
	}

	return factorial
}

//  METHOD 2
function firstFactorial2(num) {
	if (num === 0 || num === 1) return 1
	return num * firstFactorial2(num - 1)
}

module.exports = { firstFactorial, firstFactorial2 }
