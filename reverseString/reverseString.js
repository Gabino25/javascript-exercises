const reverseString = function(word) {
  let wordArray = word.split('');
  let wordArrayReverse = wordArray.reverse();
  let wordRevese = wordArrayReverse.join('');
  /** var strReverse = str.split('').reverse().join(''); **/
  console.log(word+" vs "+wordRevese)
  return wordRevese;
}

module.exports = reverseString
