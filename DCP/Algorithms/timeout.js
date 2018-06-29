// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

function hello(time) {
  console.log(`hello after ${time} millisecond.`);
}

const timeOut = (hello, n) => {
  setTimeout(() => {
    hello(n);
  }, n);
}

const timeInMillisecond = 3000;
timeOut(hello, timeInMillisecond);