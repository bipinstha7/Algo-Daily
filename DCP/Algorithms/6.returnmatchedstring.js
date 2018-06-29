// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].


// const returnMatchedString = (arr, match) => {
//   // let matchedWord = [];
//   let matchedWord = '';
//   arr.map(word => {
//     if(word.includes(match)) {
//       // matchedWord.push(word);
//       matchedWord += `${word} `;
//     }
//   });
//   return matchedWord;
// }

// const array = ['dog', 'deer', 'deal'];
// const match = 'de';
// const result = returnMatchedString(array, match);
// console.log(result);


// TEST WITH JEST
const returnMatchedString = (arr, match) => {
  // let matchedWord = [];
  let matchedWord = '';
  arr.map(word => {
    if(word.includes(match)) {
      // matchedWord.push(word);
      matchedWord += `${word} `;
    }
  });
  return matchedWord;
};

module.exports = {returnMatchedString};
