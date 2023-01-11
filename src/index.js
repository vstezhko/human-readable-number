module.exports = function toReadable (number) {
  const dict = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
  }


  if (dict[number]) {
      return dict[number]
  } else if (number%100 === 0) {
      return `${dict[number.toString()[0]]} hundred`
  } else if (number/100 > 1){
      return `${dict[number.toString()[0]]} hundred ${dict[number%100] ? dict[number%100] : `${dict[number.toString()[1]*10]} ${dict[number.toString()[2]]}`}`
  } else {
      return dict[number] ? dict[number] : `${dict[number.toString()[0]*10]} ${dict[number.toString()[1]]}`
  }
}

