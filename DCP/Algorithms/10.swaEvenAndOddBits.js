// Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

// // For example, 10101010 should be 01010101. 11100010 should be 11010001.

function swapEvenAndOddBits(bits) {
    let changedBits = bits.toString().split('')
    
    let newBits = []
    for (let i = 0; i <= changedBits.length ; i++) {
        if (i % 2 !== 0) {
            newBits.push(changedBits[i])
            newBits.push(changedBits[i - 1])
        }
    }
    let result = newBits.join('')
    return result
}

module.exports = swapEvenAndOddBits

let bits = 10101010
const newBits = swapEvenAndOddBits(bits)
console.log('newBits', newBits)