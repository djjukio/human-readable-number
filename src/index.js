const NUMBER = [
    'zero',
    'one',
    'two',
    'three', 
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen', 
    'sixteen', 
    'seventeen',
    'eighteen', 
    'nineteen'],
  NUMBER_TENS = [
    'twenty',
    'thirty', 
    'forty', 
    'fifty', 
    'sixty', 
    'seventy',
    'eighty', 
    'ninety'
    ],
  NUMBER_HUNDRED = 'hundred';

module.exports = function toReadable (number) {
if (number >= 1000) {
throw 'Too big number';
}

let result = [];

if (number >= 100) {
result.push(NUMBER[Math.floor(number / 100)]);
result.push(NUMBER_HUNDRED);

number = number % 100;
}

if (number >= 20) {
result.push(NUMBER_TENS[Math.floor(number / 10) - 2]);
if (number % 10 > 0) {
  result.push(NUMBER[number % 10]);
}
} else if (number > 0 || result.length === 0) {
result.push(NUMBER[number]);
}

return result.join(' ');
}