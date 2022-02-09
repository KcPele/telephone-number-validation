const re = /^(1\s?)?\d{3}-\d{3}-\d{4}$/;
const re2 = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;
const re3 = /^(1\s?)?\d{3}\s?\d{3}\s?\d{4}$/;

//create array of reges
const regexs = [re, re2, re3];
function telephoneCheck(str) {
  for (let reg of regexs) {
    if (reg.test(str)) {
      return true;
    }
  }
  return false;
}

console.log(telephoneCheck("1 555-555-5555"));
/*
telephoneCheck("1 555-555-5555") should return true.

telephoneCheck("1 (555) 555-5555") should return true.

telephoneCheck("5555555555") should return true.

telephoneCheck("555-555-5555") should return true.

telephoneCheck("(555)555-5555") should return true.

telephoneCheck("1(555)555-5555") should return true.

telephoneCheck("555-5555") should return false.

telephoneCheck("5555555") should return false.

telephoneCheck("1 555)555-5555") should return false.

telephoneCheck("1 555 555 5555") should return true.

telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("123**&!!asdf#") should return false.
*/
