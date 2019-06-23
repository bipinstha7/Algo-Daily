const isPanagram = require('../src/pangram')

describe('Pangram', () => {
    it('should return true', () => {
        const str = 'The quick brown fox jumps over the lazy dog.'
        const result = isPanagram(str)
        expect(result).toEqual(true)
    })

    it('should return false', () => {
        const str = 'This is not a pangram.'
        const result = isPanagram(str)
        expect(result).toEqual(false)
    })
})