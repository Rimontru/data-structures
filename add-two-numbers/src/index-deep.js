class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
  // initialize ListNode
  let dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

function addTwoNumbers(l1, l2) {
  // Create a dummy node to simplify the code
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  // Traverse both linked lists
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get the values of the current nodes (or 0 if the node is null)
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Calculate the sum and the new carry
    const total = val1 + val2 + carry;
    carry = Math.floor(total / 10);
    const digit = total % 10;

    // Create a new node with the digit and move the current pointer
    current.next = new ListNode(digit);
    current = current.next;

    // Move to the next nodes in the linked lists
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Return the result, skipping the dummy node
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const l1 = createLinkedList([2, 4, 3]); // Represents the number 342
const l2 = createLinkedList([5, 6, 4]); // Represents the number 465
const result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [7, 0, 8] (Represents the number 807)

//console.log(l1);
//console.log(l2);
//console.log('result', result);

