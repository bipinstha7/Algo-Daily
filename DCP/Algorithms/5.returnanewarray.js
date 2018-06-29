// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].


// const multipleOfArray = (arr) => {
//   let mul = 1;
//   for(let i=0; i<arr.length; i++) {
//     mul *= arr[i];
//   }
//   let newArray = [];
//   for(let j=0; j<arr.length; j++) {
//     let number = mul / arr[j];
//     newArray.push(number);
//   }
//   return newArray;
// }

// const array = [1,2,3,4,5];
// // const array = [3, 2, 1];
// const result = multipleOfArray(array);
// console.log(result);


// TEST WITH JEST
const multipleOfArray = (arr) => {
  let mul = 1;
  for(let i=0; i<arr.length; i++) {
    mul *= arr[i];
  }
  let newArray = [];
  for(let j=0; j<arr.length; j++) {
    let number = mul / arr[j];
    newArray.push(number);
  }
  return newArray;
};

module.exports = {multipleOfArray};