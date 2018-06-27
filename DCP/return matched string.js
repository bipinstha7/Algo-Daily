// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].


const returnMatchedString = (arr, match) => {
  arr.map(word => {
    if(word.includes(match)) return console.log(word);
  })
}

const array = ['dog', 'deer', 'deal'];
const match = 'de';
returnMatchedString(array, match);