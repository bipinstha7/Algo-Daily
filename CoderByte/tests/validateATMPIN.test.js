const validateATMPIN = require('../src/validateATMPIN')

describe('validateATMPIN', () => {
    test('should return true atm pin holding 4 numbers', () => {
        const result = validateATMPIN("1234")
        expect(result).toBe(true)
    })

    test('should return true atm pin holding 6 numbers', () => {
        const result = validateATMPIN("012345")
        expect(result).toBe(true)
    })

    test('should return false atm pin holding 5 numbers', () => {
        const result = validateATMPIN("12345")
        expect(result).toBe(false)
    })

    test('should return false atm pin holding 3 numbers', () => {
        const result = validateATMPIN("123")
        expect(result).toBe(false)
    })

    test('should return false atm pin including characters', () => {
        const result = validateATMPIN("a234")
        expect(result).toBe(false)
    })
})