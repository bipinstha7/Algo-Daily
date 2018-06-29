const { timeOut } = require("../Algorithms/8.timeout");

it("should call function after n milliseconds", (done) => {
  function hello(time) {
    return `hello from test after ${time} millisecond.`;
  }

  const timeInMillisecond = 3000;
  timeOut(timeInMillisecond)
    .then(() => hello(timeInMillisecond))
    .then(result => {
      expect(result).toEqual("hello from test after 3000 millisecond.");
      done();
    });
});
