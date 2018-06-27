// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

const findLowestPositiveNumber = (arr) => {
  const max = Math.max(...arr);
  // const sortArray = arr.sort();
  
  for(let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      return console.log(i);
    }
    if(i === max) {
      return console.log(max + 1);
    }
  }

}

// const arr = [1, 2, 0];
const arr = [3, 4, -1, 1]
findLowestPositiveNumber(arr);