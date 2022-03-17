// In JavaScript, build a function that checks if a word is a palindrome
// (reads the same backwards as forwards, e.g. kayak, rotator, radar etc).
// 	if the word is a palindrome, function should return true, else, false.

const isPalindrome = word => word === word.split('').reverse().join('')

module.exports = isPalindrome
