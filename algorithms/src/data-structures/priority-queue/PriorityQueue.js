import MinHeap from '../heap/MinHeap';
import Comparator from '../../utils/Comparator';

export default class PriorityQueue extends MinHeap {
  constructor() {
    super();
    this.priorities = {};
    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  add(item, prioritie = 0) {
    this.priorities[item] = prioritie;
    super.add(item);
    return this;
  }

  changePriority(item, prioritie) {
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, prioritie);
  }

  findByValue(item) {
    return this.find(item, new Comparator(this.compareValue));
  }

  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  comparePriority(a, b) {
    if (this.priorities[a] === this.priorities[b]) {
      return 0;
    }
    return this.priorities[a] < this.priorities[b] ? -1 : 1;
  }

  compareValue(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}
