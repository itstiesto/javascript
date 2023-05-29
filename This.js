Array.prototype.last = function() {
 if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};


const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // Output: 5

const emptyArray = [];
console.log(emptyArray.last()); // Output: -1
