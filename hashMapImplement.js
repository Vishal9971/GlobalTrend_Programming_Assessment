class HashMap {
  constructor(capacity = 10) {
    this.storeArray = new Array(capacity);
    this.storeSize = 0;
  }

  hash(key) {
    let hashCode = key.toString().split('').reduce((hash, char) => (hash + char.charCodeAt(0)) % 10, 0);
    return hashCode % this.storeArray.length;
  }
  put(key, value) {
    let idx = this.hash(key);
    let store = this.storeArray[idx];
    if (!store) {
      store = [];
      this.storeArray[idx] = store;
    }
    store.push([key, value]);
    this.storeSize++;
  }
  get(key) {
    let idx = this.hash(key);
    let store = this.storeArray[idx];
    if (!store) {
      return null;
    }
    for (let i = 0; i < store.length; i++) {
      let start = store[i];
      if (start[0] === key) {
        return start[1];
      }
    }
    return null;
  }
  remove(key) {
    let idx = this.hash(key);
    let store = this.storeArray[idx];
    if (!store) {
      return null;
    }
    for (let i = 0; i < store.length; i++) {
      let start = store[i];
      if (start[0] === key) {
        store.splice(i, 1);
        this.storeSize--;
        return start[1];
      }
    }
    return null;
  }
}

const myMap = new HashMap();
myMap.put('name', 'vishal');
myMap.put('age', 22);
console.log(myMap.get('name'));
console.log(myMap.remove('age'));
console.log(myMap.get('age'))