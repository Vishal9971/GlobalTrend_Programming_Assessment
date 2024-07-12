function areAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let charCount = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i].toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i].toLowerCase();
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

let str1 = ' race';
let str2 = 'arec ';

let ans = areAnagram(str1, str2);
console.log(ans);
