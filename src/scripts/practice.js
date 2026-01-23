function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let newStr = "";
  for (const char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

function calculator() {
  return {
    add(a, b) {
      return a + b;
    },
    sub(a, b) {
      return a - b;
    },
    mul(a, b) {
      return a * b;
    },
    div(a, b) {
      return a / b;
    },
  };
}

function caesarCipher(str, shift) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  for (const char of str) {
    let isUpper = char === char.toUpperCase() ? true : false;
    const index = ALPHABET.indexOf(char.toLowerCase());
    if (index === -1) {
      newStr += char;
      continue;
    }
    let newIndex = index + shift;
    if (newIndex > 25) {
      newIndex = newIndex - 25 - 1;
    }
    const newChar = isUpper
      ? ALPHABET[newIndex].toUpperCase()
      : ALPHABET[newIndex];
    newStr += newChar;
  }
  return newStr;
}

function analyzeArray(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
