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
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = "";
  for (const char of str) {
    let alphabet;
    if (lower.includes(char)) {
      alphabet = lower;
    } else if (upper.includes(char)) {
      alphabet = upper;
    } else {
      newStr += char;
      continue;
    }
    let newIndex = alphabet.indexOf(char) + shift;
    if (newIndex > 25) {
      newIndex = newIndex - 25 - 1;
    }
    newStr += alphabet[newIndex];
  }
  return newStr;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
