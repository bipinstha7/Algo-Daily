/**
 * Have the function capitalizeLetter(str) take the str parameter
 * being passed and capitalize the first letter of each word.
 * Words will be separated by only one space.
 *
 * Input:"hello world"
 * Output:"Hello World"
 *
 * Input:"i ran there"
 * Output:"I Ran There"
 */

function capitalizeLetter(str) {
	return str
		.split(' ')
		.map(capitalizeFirstLetter)
		.join(' ')
}

function capitalizeFirstLetter(arr) {
	const capitalFirstLetter = arr.charAt(0).toUpperCase()
	return capitalFirstLetter + arr.slice(1)
}

module.exports = capitalizeLetter
