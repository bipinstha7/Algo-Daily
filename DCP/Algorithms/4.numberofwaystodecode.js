// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.


// function numberOfWaysToDecodeMessage(msg) {
//   const message = msg.split('');
//   const inValidMessage = 'inValid Message !!!'
//   if (message[0] === '0') {
//     return inValidMessage;
//   }

//   let count = 1;  

//   for(let i = 0; i < msg.length-1; i++) {
//     if (msg.substring(i, i+2) <= 26) {
//       count += 1;
//       // console.log(msg.substring(i, i+2));
//     }
//   }
//   return count;
// }

// const result = numberOfWaysToDecodeMessage('123');
// console.log(result);

// TEST WITH JEST
function numberOfWaysToDecodeMessage(msg) {
  const message = msg.split('');
  const inValidMessage = 'inValid Message !!!'
  if (message[0] === '0') {
    return inValidMessage;
  }

  let count = 1;  

  for(let i = 0; i < msg.length-1; i++) {
    if (msg.substring(i, i+2) <= 26) {
      count += 1;
      // console.log(msg.substring(i, i+2));
    }
  }
  return count;
}

module.exports = {decode: numberOfWaysToDecodeMessage};