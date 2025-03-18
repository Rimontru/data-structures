import { log } from "node:console";

class Node {
  // It represents each node from of list
  constructor(value) {
    this.value = value;
    this.next = null; // point to next Element
  }
  // Node { value: x next: Node {} }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    // We'll create a new Node such as Node class
    const newNode = new Node(value);
    // Next, lets check if Head of list is null
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }
}

const createLinkedList = (arr) => {
  const list = new LinkedList();
  for (const value of arr) {
    list.add(value);
  }

  return list.head || {};
};

const addTwoNumbers = (l1, l2) => {
  let total = 0;
  let carry = 0;
  const list = new LinkedList();

  log("x", 1 % 10);
  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.value : 0;
    const val2 = l2 ? l2.value : 0;

    //log("aaa", Math.floor(10 / 10));
    total = val1 + val2 + carry;
    log(val1, val2, carry);

    log(total / 10);
    carry = Math.floor(total / 10); // 18 / 10 = Math.floor(1.8) -> 1
    const digit = total % 10; // 18 % 10 = 8
    log("t", total, "d", digit);
    list.add(digit);

    if (l1) l1 = l1.next; // We update to end bucle until will be null for both
    if (l2) l2 = l2.next; // We update to end bucle until will be null for both
  }

  return list.head || {};
};

const convertListToArray = (list) => {
  const result = [];
  while (list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result;
};

const l1 = createLinkedList([9, 9, 9, 9]); // 342
const l2 = createLinkedList([9, 9, 9]); // 465
const result = addTwoNumbers(l1, l2); // 807
log(convertListToArray(result)); // [7,0,8]

