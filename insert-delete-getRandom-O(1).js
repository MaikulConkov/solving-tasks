var RandomizedSet = function () {
  this.map = {};
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.hasOwnProperty(val)) {
    return false;
  }
  this.map[val] = this.arr.length;
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.hasOwnProperty(val)) {
    return false;
  }
  const index = this.map[val];
  const lastElement = this.arr[this.arr.length - 1];

  this.arr[index] = lastElement;
  this.map[lastElement] = index;

  this.arr.pop();
  delete this.map[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
