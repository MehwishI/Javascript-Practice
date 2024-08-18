
//Pair Programming "The Swapper" Assignment with India Cornell and Mehwish Iqbal, on June 30, 2023 for Module 1, Week 3
/* assignment:
create a function that will swap values between two objects. The function will receive four parameters:
  key1, a string
  object1, an object
  key2, a string
  object2, an object
the function should:
1. fetch the value stored in key1 in object1, and then store that value in key2 of object2
2. take the original value stored in key2 of object2 and store it in key1 of object1
3. does not return anything.
*/
const swapper = function (key1, object1, key2, object2) {

  let temp = object2[key2];
  object2[key2] = object1[key1];
  object1[key1] = temp;
}


