// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2

// const numberOfWaysToClimbTheStaircase = N => {
//   if (N === 0 || N === 1) return 1;
//   return (numberOfWaysToClimbTheStaircase(N - 1) + numberOfWaysToClimbTheStaircase(N - 2));
// };

// const N = 4;
// const ways = numberOfWaysToClimbTheStaircase(N);
// console.log(ways);

// TEST WITH JEST
const numberOfWaysToClimbTheStaircase = N => {
  if (N === 0 || N === 1) return 1;
  return (
    numberOfWaysToClimbTheStaircase(N - 1) +
    numberOfWaysToClimbTheStaircase(N - 2)
  );
};

module.exports = { staircase: numberOfWaysToClimbTheStaircase };

// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// const numberOfWaysToClimbTheStaircase2 = (N) => {
//   if (N === 0) return 1;
//   let total = 0;
//   for(let step of [1, 3, 5]) {
//     if ((N - step) >= 0) {
//       total += numberOfWaysToClimbTheStaircase2(N - step);
//     }
//   }
//   return total;
// };

// const N = 4;
// const ways = numberOfWaysToClimbTheStaircase2(N);
// console.log(ways);


