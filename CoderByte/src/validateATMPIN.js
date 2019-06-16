/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
 * anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 * eg:
 * validatePIN("1234") === true
 * validatePIN("12345") === false
 * validatePIN("a234") === false
 */

/**
 * @param {string} pinCode
 * @return {boolean}
 */

function validateATMPIN(pinCode) {
    const invalidPinLength = pinCode.length === 4 || pinCode.length === 6
	if (!invalidPinLength) return false

	const regex = /^[0-9]*$/
	const isValid = regex.test(pinCode)

	if (!isValid) return false

	return true
}

module.exports = validateATMPIN
