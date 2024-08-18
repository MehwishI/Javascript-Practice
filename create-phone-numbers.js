//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

//The returned format must be correct in order to complete this challenge. Don't forget the space after the closing parenthese!


const createPhoneNumber = function (array) {
  //   let phone = "(" + array[0].toString() + array[1].toString() + array[2].toString()+") ";
  //   for (let i = 3; i< array.length;  i++) {
  //     phone= phone + array[i].toString();
    
  //   }
  //   return phone;
  // }
  
  array = array.join('');
  let phone = "(" + array.substring(0, 3) + ") " + array.substring(3, 6) + "-" + array.substring(6);
  return phone;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));