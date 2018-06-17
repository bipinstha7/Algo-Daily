// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// method 1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// method 2
function reverse(str) {
  let newStr = [];
  str.split('').map(char => {
    return newStr.unshift(char);
  });
  return newStr.join('');
}

// method 3
// function reverse(str) {
//   let newStr = '';
//   str.split('').map(char => {
//     newStr = char + newStr;
//   });
//   return newStr;
// }

// method 4
// function reverse(str) {
//   let newStr = '';
//   for(let char of str) {
//     newStr = char + newStr;
//   }
//   return newStr;
// }

// method 5
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }


module.exports = reverse;
