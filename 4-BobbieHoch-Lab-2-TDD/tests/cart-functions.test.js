const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem}= require('../src/js/cart-functions.js');

describe ("calculateChange", () => {
 test ('When payment is 5 and total is 6 then change will be 1', () => {
  //Arrange
  const total =5;
  const payment =6;
 
 //Act
 const change = calculateChange(payment, total);
 
 //Assert
 expect(change).toBe(1);
});

test('When payment is 13.03 and total is 12.3 than change will be 0.73', () => {
    const total =12.32;
    const payment =13.03;
   const change = calculateChange(payment, total);
   expect(change).toBeCloseTo(0.73);
});

test('When payment is 18  and total is 12.36 than change will be 5.64', () => {
  const total =12.36;
  const payment =18;
 const change = calculateChange(payment, total);
 expect(change).toBeCloseTo(5.64);

});


describe("calculateTotal", () => {
  test("Calculates the total with one item", () => {
   //Arrange
   const items = [{ name: 'Ball', price: 4.99}];
   
  //Act
  const total = calculateTotal(items);
  
  //Assert
  expect(total).toEqual(4.99);
 });
});

 describe("calculateTotal with three Items")
  test("Calculates the total with three items", () => {
   //Arrange
   const items =[
          {name:'Ball', price: 3.5},
          {name:'Ball', price: 12.99},
          {name:'Ball', price: 0.03},
        ];
 
  //Act
  const total = calculateTotal(items);
  
  //Assert
  expect(total).toBeCloseTo(16.52);
 });
  
 test('Calculates the total and expects it to be 0', () => {
//Arrange
const itemsArray= [];

// Act
const total = calculateTotal(items);

//Assert
expect(total).toBe(0);

});

test('Calculates the total with four items', () => {
//Arrange
const items= [
  {name:'Ball', price: 17},
  {name:'Ball', price: 19},
  {name:'Ball', price: 14},
  {name:'Ball', price: 12},
];

// Act
const total = calculateTotal(items);

//Assert
expect(total).toBe(52);

  });
}


describe("addItem", () => {
  test("Add a New item at end of Array");

   //Arrange
   const itemsArray= [];
   addItem(itemsArray, "beans", 3);

  //Act
  const total = calculateTotal(items);
  
  //Assert
  expect(itemsArray).toContain(beans, 3);
 });

// describe("removeItem", () => {
//   test.todo("add removeItem tests here");

//    //Arrange
//    const itemsArray= [];
//    addItem(itemsArray, "beans", 3);

//   //Act
//   const total = calculateTotal(items);
  
//   //Assert
//   expect(itemsArray).toContain(beans, 3);