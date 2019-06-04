/**
 * Have the function reverseString(str) 
 * ake the str parameter being passed and 
 * return the string in reversed order. 
 * For example: if the input string is "Hello World and Coders" 
 * then your program should return the string sredoC dna dlroW olleH.
 */

 function reverseString(str) {
    return str.split('').reverse().join('')
 }

module.exports = reverseString