function palindrome(str) {
  let word = str.toLowerCase();

  let result = word.replace(/(\W)|_/g, '');
  let resultCounter = 0;

  for(let i = 0; i < Math.trunc(result.length / 2); i++) {
    if(result[i] == result[result.length - 1 - i]) {
      resultCounter++;
    }
  }

  if(resultCounter == Math.trunc(result.length / 2))
    return true;
  else
    return false;
}