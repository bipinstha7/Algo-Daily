// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

const largestSumOfNonadjacentNumbers = (arr) => {
  let include = arr[0];
  let exclude = 0;
  
  for(let i = 1; i < arr.length; i++) {
    let sum = include > exclude ? include : exclude;
    include = exclude + arr[i];
    exclude = sum;
  }
  return (include > exclude ? include : exclude);
}

// const array = [2, 4, 6, 2, 5];
const array = [5, 1, 1, 5];
const result = largestSumOfNonadjacentNumbers(array);
console.log(result);