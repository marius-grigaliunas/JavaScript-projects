function telephoneCheck(str) {

  let formatRegex1 = /^[1]?[\s-]?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/

  // has 1 in front?
  // has a space or hyphen ?
  // either has (000) or 000.
  // has a space or hyphen ?
  // has 000.
  // has a space or hyphen?
  // has 0000 at the end.

  return formatRegex1.test(str);
}

telephoneCheck("1 555-555-5555");