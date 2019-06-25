/**
 * There is an array with some numbers. 
 * All numbers are equal except for one. Try to find it!
 * findUnique([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUnique([ 0, 0, 0.55, 0, 0 ]) === 0.55
 */

 function findUnique(arr) {
 	const uniqueArray = [...new Set(arr)]
 	const result = uniqueArray.filter(unique => {
 		const matchedNumbers = arr.filter(a => a === unique)

 		if (matchedNumbers.length === 1) return unique
 	})

 	if (result.length) return result[0]
 	return 0
 }

 module.exports = findUnique