/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let numString = String(num);
  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  let result = '';
  let counter = 1;
  //1943
  for (let i = numString.length - 1; i >= 0; i--) {
    let number = +numString[i];
    let numerals = number * counter;
    if (number < 4) {
      result = result.padStart(number + result.length, romanNumerals[counter]);
    } else if (number > 5 && number < 9) {
      result = romanNumerals[5 * counter] + result.padStart(number - 5 + result.length, romanNumerals[counter]);
    } else {
      result = romanNumerals[numerals] + result;
    }
    counter *= 10;
  }

  return result;
};

const number = 1963;
console.log(intToRoman(number));
