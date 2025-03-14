class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

function createLinkedList(values) {
  const list = new LinkedList();
  for (const value of values) {
    list.add(value);
  }
  return list;
}

// Example usage:
const values = [1, 2, 3, 4, 5];
const linkedList = createLinkedList(values);
linkedList.print();
