function convertToRoman(num) {
  if (typeof num != 'number') //Checking if num is a number
    return false;

  let digits = String(num).split(''); //num is split into an array of digits

  let key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',  // an array of keys to match
             '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',	 // any digit
             '','I','II','III','IV','V','VI','VII','VIII','IX']; 

  let roman = '', i = 3; // i = 3 because only the last 3 digints are different

  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman; //converting a digit into a roman char
  }							   // all the possible digits are in places themselves 
  							   //+ 0 or 10 or 20 depending on the digits place
							   // exmp. 6 = 26
  return Array(+digits.join('') + 1).join('M') + roman;	   // adds an M if there is a thousand.
}

console.log(convertToRoman(36));
