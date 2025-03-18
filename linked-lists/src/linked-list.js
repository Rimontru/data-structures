// [19|*--]->[32|*--]->[7 |*--]->[12|*--]->[99|null]

// [✅] Node Constructor
// [✅] LinkedList Constructor
// [✅] Add Method
// [✅] InsertAt Method
// [✅] Remove Method
// [✅] RemoveFrom Method
// [✅] isEmpty Method
// [✅] getSize Method
// [✅] Print Method
// [✅] PrintAsArray Method

// Node Constructor
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add Method
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // InsertAt Method
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  // Remove Method
  remove(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.value === value) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.value;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  // RemoveFrom Method
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (previous === null) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size--;
    return current.value;
  }

  // isEmpty Method
  isEmpty() {
    return this.size === 0;
  }

  // getSize Method
  getSize() {
    return this.size;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  printAsArray() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

