
const pigIt = function (str) {
 
  return str.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldWay !