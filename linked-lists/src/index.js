import { log } from "node:console";
import { LinkedList } from "./linked-list.js";

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
log(linkedList.print());

