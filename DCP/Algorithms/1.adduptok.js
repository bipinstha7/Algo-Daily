// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// const add = (arr, k) => {
//   // const arr = [10, 15, 3, 7];
//   // const k = 17;

//   for (let i = 0; i < arr.length; i++) {
//     let first = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let second = arr[j];
//       if (first + second === k) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// const array = [10, 15, 3, 7];
// const k = 17;
// const result = add(array, k);
// console.log(result);



// FOR TEST WITH JEST
const add = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let second = arr[j];
      if (first + second === k) {
        return true;
      }
    }
  }
  return false;
};

module.exports = {add};