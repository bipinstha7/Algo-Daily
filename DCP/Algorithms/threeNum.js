/**
 * Given three numbers, return their product. But if one of the numbers is the same as another, 
 * it does not count: If two numbers are similar, return the lonely number. 
 * If all numbers are same, return 1.

Example:

* lonelyNumber(1,2,3)
=> 6

* lonelyNumber(6,6,4)
=> 4

* lonelyNumber(7,7,7)
=> 1

*/


function threeNum(...nums) {
  let product = 1
  for (let i = 0; i < nums.length; i++) { 
    const withOutNum = nums.filter(n => n!== nums[i])
    
    if (!withOutNum.length) return product
    if (withOutNum.length === 1) return product = withOutNum[0]
    product *= nums[i]
  }
  
  return product
}

module.exports = threeNum



























