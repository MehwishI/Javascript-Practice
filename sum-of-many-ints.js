//for i from 1 to n, do i % m and return the sum.

//f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)

const sumInts = function (n, m) {
  let sum = 0;

  
  for (let i = 1; i <= n; i++){
    sum += i % m; 
  }
  return Math.floor(sum);
}
console.log(sumInts(n=10,m=5))