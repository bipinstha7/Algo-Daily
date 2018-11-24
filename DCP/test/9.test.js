const {autoComplete} = require ('../Algorithms/9.return matched string')

describe('9.return matched string', () => {
    it('should return a matched array from a given array', () => {
        const prefix = 'de'
        const givenArray = ['deep', 'dear', 'dog', 'deal']
        const returnedArray = autoComplete(prefix, givenArray)

        expect(returnedArray).toEqual(expect.arrayContaining(['deep', 'deal', 'dear']))
    })
})