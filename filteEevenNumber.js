function filterEven(a) {
  let filterArray = a.filter((number) => number % 2 !== 0);
  return filterArray;
}

let a = [8, 2, 3, 4, 5, 6];
let filteredArray = filterEven(a);
console.log(filteredArray);
