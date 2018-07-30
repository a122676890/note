import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.append(value);
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.tail.value;
  }

  isEmpty() {
    return !this.linkedList.tail;
  }

  pop() {
    const node = this.linkedList.deleteTail();
    return node ? node.value : null;
  }

  toArray() {
    return this.linkedList.toArray().map(node => node.value).reverse();
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
