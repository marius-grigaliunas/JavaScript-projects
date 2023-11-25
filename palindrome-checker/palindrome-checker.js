function palindrome(str) {
  let word = str.toLowerCase(); 

  let result = word.replace(/(\W)|_/g, '');  // Converting the give string to lower case and removing any characters that aren't digits or letters.
  let resultCounter = 0;

  for(let i = 0; i < Math.trunc(result.length / 2); i++) { // this algorithm checks the first char with the last, second char with the second to last and so on. 
    if(result[i] == result[result.length - 1 - i]) {       // until they meet in the middle. if the characters match the result counter is being added to.
      resultCounter++;
    }
  }

  if(resultCounter == Math.trunc(result.length / 2))  // If the matched characters are equal to half of all the characters it means the word is a palindrome.
    return true;
  else
    return false;
}
