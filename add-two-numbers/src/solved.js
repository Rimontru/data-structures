// Definition for singly-linked list
class ListNode {
  // Constructor to initialize the ListNode
  constructor(val, next) {
    // Value of the ListNode
    this.val = val === undefined ? 0 : val;
    // Next pointer of the ListNode
    this.next = next === undefined ? null : next;
  }
}

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
  // lets initialize a ListNode with value 0
  let dummy = new ListNode(0);
  // lets initialize a current ListNode to dummy node
  let current = dummy;
  // iterate over the array and create a new ListNode for each element
  for (const num of arr) {
    // assign the next node to the current number
    current.next = new ListNode(num);
    // move the current node to the next node
    current = current.next;
  }
  // Return the dummy.next to skip the Zero node
  return dummy.next;
};

const addTwoNumbers = (l1, l2) => {
  // Create a dummy node to simplify the code
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  let lap = 0;

  // Traverse both linked lists
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get the values of the current nodes (or 0 if the node is null)
    const val1 = l1 ? l1.val : 0; //[2, 4, 3]
    const val2 = l2 ? l2.val : 0; //[5, 6, 4]

    // Calculate the sum and the new carry
    const total = val1 + val2 + carry;
    // Rule of 10, if the total is greater than 10, then the carry will be 1
    carry = Math.floor(total / 10);
    const digit = total % 10;
    //console.log('lap', lap, 'total', total, 'carry', carry, 'digit', digit);

    // Create a new node with the digit and move the current pointer
    current.next = new ListNode(digit);
    current = current.next;

    // Move to the next nodes in the linked lists
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    lap++;
  }

  // Return the result, skipping the dummy node
  return dummy.next;
};

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l2 = createLinkedList([9, 9, 9, 9]);
const result = addTwoNumbers(l1, l2);
//console.log(linkedListToArray(result));

