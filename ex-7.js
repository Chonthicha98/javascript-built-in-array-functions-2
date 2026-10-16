function isPalindrome(string) {
  // Start coding here
  const word = string;
  let newWord;
  newWord = string.split('').reverse().join('').trim();

  return word === newWord;
}

//Example case
console.log(isPalindrome('reviver')); // true
console.log(isPalindrome('บวบ')); // true
console.log(isPalindrome('deliver')); // false

// My steps:
// 1. keep original word, declare empty variable
// 2. use hint to process empty variable from step 1
// 3. compare using strict equality === of original word vs. processed variable from step 2.
// 4. output cases result
