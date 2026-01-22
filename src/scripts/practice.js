function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let newStr = '';
  for (const char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

module.exports = { capitalize, reverseString };
