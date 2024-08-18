
function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
console.log(findUniq([ 1, 1, 1, 0.5, 1, 1 ]))