const swapBits = require('../Algorithms/10.swaEvenAndOddBits')

describe('swap even and odd bits', () => {
    it('should return swapped bits', () => {
        let bits = 10101010
        let result = swapBits(bits)
        
        expect(typeof result).toBe('number')
        expect(result).toBe('01010101')
    })
})