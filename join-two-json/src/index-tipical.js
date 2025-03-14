// This logis is Nested Loops implementation is pesimistic
const directory = [
  { name: "Maggie", age: 14, city: "New York", id: 0, phone: "555-555-5555" },
  { name: "Homer", age: 38, city: "Springfield", id: 1, phone: "555-555-5555" },
  { name: "Marge", age: 34, city: "Springfield", id: 2, phone: "555-555-5555" },
  { name: "Bart", age: 10, city: "Springfield", id: 3, phone: "555-555-5555" },
  { name: "Lisa", age: 8, city: "Springfield", id: 4, phone: "555-555-5555" },
  { name: "Julio", age: 30, city: "Springfield", id: 5, phone: "555-555-5555" },
  { name: "Ned", age: 60, city: "Springfield", id: 6, phone: "555-555-5555" },
  { name: "Moe", age: 50, city: "Springfield", id: 7, phone: "555-555-5555" },
  { name: "Lenny", age: 40, city: "Springfield", id: 9, phone: "555-555-5555" },
  { name: "Lenny", age: 40, city: "Springfield", id: 9, phone: "555-555-5555" },
  { name: "Carl", age: 40, city: "Springfield", id: 10, phone: "555-555-5555" },
];

const registrations = [
  { id: 0, age: 50, event: "Birthday Party", email: "maggie@gmail.com" },
  { id: 1, age: 50, event: "Football Game", email: "homer@gmail.com" },
  { id: 2, age: 50, event: "Birthday Party", email: "Marge@gmail.com" },
  { id: 3, age: 50, event: "Football Game", email: "Bart@gmail.com" },
  { id: 4, age: 50, event: "Birthday Party", email: "Lisa@gmail.com" },
];

const join = (directory, registrations) => {
  const result = [];
  for (const person of directory) {
    for (const registration of registrations) {
      if (person.id === registration.id) {
        result.push({ ...person, ...registration });
      }
    }
  }
  return result;
};

console.log(join(directory, registrations));
