// Write your algorithm here
// function isPalindrome(word) {
//   return word === word.split('').reverse().join('');
  
// }

/*function isPalindrome(word) {
  const wordLr = word
  const wordRl = word.split('').reverse().join('');
  return word === wordRl
} */

isPalindrome = (word) => {
  return word === word.split('').reverse('').join('');
}

/* 
  Add your pseudocode here
  1. .split('') turn turn string into array
  2. .reverse('')
  3. .join('')
  4. comapre the original word to value of new reversed word


  //write a function for is
  //is function will receive 1 argument
  //is returns true if string is a palindrome

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
