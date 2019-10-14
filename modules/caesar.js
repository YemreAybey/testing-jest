const caesar = (str, num) => {
  const regex = /[a-z]/i;
  return str
    .split('')
    .map(char => {
      if (regex.test(char)) {
        return shift(char, num);
      } else {
        return char;
      }
    })
    .join('');
};

const shift = (char, num) => {
  let charN = char.charCodeAt(0);
  if (charN >= 97) {
    charN += num;
    if (charN > 122) {
      charN = 96 + charN - 122;
    }
  } else {
    charN += num;
    if (charN > 90) {
      charN = 64 + charN - 90;
    }
  }
  return String.fromCharCode(charN);
};

export default caesar;
