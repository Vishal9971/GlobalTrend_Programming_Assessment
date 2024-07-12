function removeDuplicates(arr) {
  let newArr = new Set();
  arr.filter((item)=>{
    if(!newArr.has(item)){
      newArr.add(item);
    }
  });
  return newArr;
}

const arr = [3,1, 2, 1, 3, 4,2, 5,2, 1, 6];

let ans = removeDuplicates(arr);
console.log(ans);
