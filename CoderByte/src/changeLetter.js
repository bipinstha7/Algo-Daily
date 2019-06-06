/**
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u)
 * and finally return this modified string.
 *
 * Input:"hello*3"
 * Output:"Ifmmp*3"
 *
 * Input:"fun times!"
 * Output:"gvO Ujnft!"
 */

function letterChanges(str) {
	return str.replace(/[a-z]/gi, function(char) {
		return changeLetter(char)
	})
}

function changeLetter(char) {
	const asciiCode = char.charCodeAt(0) + 1
	const charCode = String.fromCharCode(asciiCode)
	const vowels = ['a', 'e', 'i', 'o', 'u']
	if (vowels.includes(charCode)) {
		return charCode.toUpperCase()
	}
	return charCode
}

module.exports = letterChanges
