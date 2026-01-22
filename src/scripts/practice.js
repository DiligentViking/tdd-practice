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

module.exports = { capitalize, reverseString, calculator };
