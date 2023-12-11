const concatStrings = (a, b) => a + b;

const isString = (value) => typeof value === 'string';

const identifySign = (num) => {
  if (num === 0) {
    return 'Ноль';
  }
  return num > 0 ? 'Положительное число' : 'Отрицательное число';
};

const reverseWords = (text) => text.split(' ').reverse().join(' ');

const wordsCount = (text) => (text === '' ? 0 : text.split(' ').length);

export {
  concatStrings, isString, identifySign, reverseWords, wordsCount,
};
