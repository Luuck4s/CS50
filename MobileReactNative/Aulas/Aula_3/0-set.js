class Set {
  constructor(arr) {
    this.arr = arr;
  }

  add(val) {
    if (!this.has(val)) {
      this.arr.push(val);
    }
  }

  delete(val) {
    this.arr = this.arr.filter(item => item !== val);
  }

  has(val) {
    return this.arr.includes(val);
  }

  get size() {
    return this.arr.length;
  }
}

const s = new Set([1, 2, 3, 4, 5]);

s.add(1);
s.add(1);
s.add(1);
console.log("Deverá ter 5 membros e atualmente tem: ", s.size);

console.log("Deverá conter o número 5: ", s.has(5));

s.add(6);
console.log("Deverá conter o número 6: ", s.has(6));
console.log("Deverá ter 6 membros e atualmente tem: ", s.size);

s.delete(6);

console.log("Não deverá conter o número 6: ", !s.has(6));
console.log("Deverá ter 5 membros e atualmente tem: ", s.size);
