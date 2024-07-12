function capitalFirstLetter(str) {
  let isWordStart = true;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (isWordStart && char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      newStr += char.toUpperCase();
      isWordStart = false;
    } else {
      newStr += char;
    }
    if (char === ' ') {
      isWordStart = true;
    }
  }
  return newStr;
}

let str = 'this is a test string for this Program';
let newStr = capitalFirstLetter(str);
console.log(newStr);
