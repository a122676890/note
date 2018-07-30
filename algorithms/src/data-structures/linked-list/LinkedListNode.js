export default class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
