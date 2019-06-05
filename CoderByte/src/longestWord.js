/**
 * Have the function longestWord(sen) 
 * take the sen parameter being passed and 
 * return the largest word in the string. 
 * If there are two or more words that are the same length, 
 * return the first word from the string with that length. 
 * Ignore punctuation and assume sen will not be empty. 
 * 
 * Input:"fun&!! time"
 * Output:"time"
 * 
 * Input:"I love dogs"
 * Output:"love"
 */

 function longestWord(sen) {
    const senWithoutPunctuation = sen.replace(/[^a-zA-Zsd]/g, ' ')
    console.log(senWithoutPunctuation)
    const senInArray = senWithoutPunctuation.split(' ')
    const lengths = senInArray.map(arr => arr.length)
    const maxLength = Math.max(...lengths)
    const result = senInArray.filter(arr => arr.length === maxLength)
    
    return result[0]
 }

module.exports = longestWord