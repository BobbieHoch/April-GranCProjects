// const todoList = [];

// // function randomId() {
// //   const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
// //   return uint32.toString(16);
// // }

// const addToDo = (todo) => {
//   todoList.unshift(todo);
//   return todoList;
// };

// addToDo({ text: "New todo", isCompleted: false, id: "1" });
// addToDo({ text: "Another New todo", isCompleted: false, id: "2" });
// addToDo({ text: "Walk the Dog", isCompleted: false, id: "3" });
// addToDo({ text: "Clean room", isCompleted: false, id: "4" });

// const removeTodo = (id) => {
//   const updatedTodoList = todoList.filter((todo) => todo.id !== id);
//   todoList = updatedTodoList;
//   return toDoList;
// };
// removeTodo("4");

// const updateTodo = (id, todoUpdateObject) => {
//   const updateIndex = todoList;
// };
// console.log();

// 1. Create VendingMachine array
//     Every Item has a name, a code, a quantity, a price (give it 2 items to start)

const vendingMachine = [
  { name: "twix", code: "A01", quantity: 4, price: 1.5 },
  { name: "snickers", code: "B02", quantity: 10, price: 1.75 },
];

// 2. Add item to VendingMachine ( pass array a parameter, build item inside function) (think about what that means the parameters will be)

function addItem(array, name, code, quantity, price) {
  array.push({ name: name, code: code, quantity: quantity, price: price });
}
// 3. update quantity
const updateQuantity = (array, code, quantity) => {
  const updatedArray = array.map((currentObject) => {
    if (currentObject.code === code) {
      return { ...currentObject, quantity: quantity };
    }
    return currentObject;
  });
};
updateQuantity(vendingMachine, "B02", 4);
console.log(vendingMachine);
// 4. update price

// 5. remove item from stock (by code)

// 6. Report inventory (show all in stock)

// 7. Get Item from vendingMachine (for now do not worry about price, we can add that in later)

// extended challenges

// 8. Get item takes in money, checks to make sure it is the correct amount. If not console.log('Need the price of the item (as the specific item price), you only have money(value put into machine)) If it is the correct amount or more, return item and change

// 9. Get item reduces the amount of stock(what would you use that would keep you from writing it all out?)
