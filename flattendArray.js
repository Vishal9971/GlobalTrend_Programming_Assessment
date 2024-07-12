Array.prototype.flatten = function () {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result.push(...this[i].flatten());
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

const arr1 = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];
const flatArr2 = arr1.flatten();
console.log(flatArr2);
