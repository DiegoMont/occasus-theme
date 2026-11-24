class _Node<T> {
  next: _Node<T>|null = null;

  constructor(public readonly value: T) {}
}

class LinkedList<T> {
  private start: _Node<T>|null = null;
  private end: _Node<T>|null = null;

  isEmpty(): boolean {
    return this.start === null;
  }

  append(value: T): void {
    const node = new _Node(value);
    if (this.end === null) {
      this.start = node;
    } else {
      this.end.next = node;
    }
    this.end = node;
  }

  get(index: number): T {
    if (!Number.isInteger(index) || index < 0) {
      throw new RangeError('Index must be a non-negative integer');
    }

    let current = this.start;
    for (let currentIndex = 0; currentIndex < index; currentIndex++) {
      if (current === null) {
        throw new RangeError('Index out of range');
      }
      current = current.next;
    }

    if (current === null) {
      throw new RangeError('Index out of range');
    }
    return current.value;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append('do');
linkedList.append('re');
linkedList.append('mi');
const secondNote = linkedList.get(1);
console.log(secondNote);
