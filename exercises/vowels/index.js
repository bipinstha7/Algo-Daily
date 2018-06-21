// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// method 1
// function vowels(str) {
//   let count = 0;
//   str.split('').map(char => {
//     if(char === 'a') {
//       count++;
//     } else if(char === 'e') {
//       count++;
//     } else if(char === 'i') {
//       count++;
//     } else if(char === 'o') {
//       count++;
//     } else if(char === 'u') {
//       count++
//     }
//   });
//   return count;
// }

// method 2
function vowels(str) {
  let count = 0;
  const checkVowels = 'aeiou';
  for(let char of str.toLowerCase()) {
    if(checkVowels.includes(char)) {
      count++;
    }
  }
  return count;
}



module.exports = vowels;
