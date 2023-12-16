function rot13(string){
  let resultArray = [];

  for(let i = 0; i < string.length; i++) {
    let letterCode = string[i].charCodeAt();
    
    switch (true) {
      case string[i] >= 'A' && string[i] < 'N':
        letterCode += 13;
        break;
      case string[i] >= 'N' && string[i] <= 'Z':
        letterCode -= 13;
        break;
      default:
        break;
    }

    resultArray.push(String.fromCharCode(letterCode));
  }

  console.log(resultArray.join(''));
  return resultArray.join('');
}

rot13("SERR PBQR PNZC!");