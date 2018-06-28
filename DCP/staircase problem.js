// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2

const numberOfWaysToClimbTheStaircase = N => {
  if (N === 0 || N === 1) return 1;
    return (numberOfWaysToClimbTheStaircase(N - 1) + numberOfWaysToClimbTheStaircase(N - 2));
};

const N = 4;
const ways = numberOfWaysToClimbTheStaircase(N);
console.log(ways);
