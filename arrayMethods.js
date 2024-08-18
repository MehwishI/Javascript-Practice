const array = [1, 2, 3, 4, 5];
let sum = 0;

array.forEach((element) => {
  sum += element;
  return; // This return statement has no effect
});

console.log(sum); 

// Using an Arrow Function
let myFunction = (item, index) => {
  console.log(index + ':' + item);
};

const fruits = ['apple', 'orange', 'cherry'];
fruits.forEach(myFunction);

// Using an Function Declaration
const fruits2 = ['apple', 'orange', 'cherry'];
fruits2.forEach(myFunction2);

function myFunction2(item, index) {
  console.log(index + ':' + item);
}

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);