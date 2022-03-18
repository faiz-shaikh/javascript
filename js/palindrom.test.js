const isPalindrome = require('./palindrome')

describe('checks if a word is palindrome', () => {
  test.each(['kayak', 'rotator', 'radar', 'hannah', 'deified', 'civic'])(
    'testing %s for palindrome',
    word => {
      expect(isPalindrome(word)).toBeTruthy()
    },
  )
})
