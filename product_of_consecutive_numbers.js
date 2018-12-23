// It's one identity of Fibonacci Sum Fn ^ 2 = Fn * Fn+1

// function productFib(prod) {
//   //Determine n which gives the Fibonacci boundary 
//   let f1 = 0;
//   let f2 = 1;
//   let n = 0;

//   while ( f1*f2 <= prod ) {
//     n = f2 + f1;
//     f1 = f2;
//     f2 = n;
//     if( f1 * f2 === prod ){
//       return [f1, f2, true]
//     }
//   }
//   return [f1, f2, false]
// }

/* Refactor */
function productFib(prod) {
  let f1 = 0;
  let f2 = 1;
  while ( f1*f2 < prod) {
    f2 = f1 + f2;
    f1 = f2 - f1;
  }
  return [f1, f2, f1*f2 === prod]
}

// console.log(productFib(714)) // [55, 89, true])
console.log(productFib(4895)) // [55, 89, true])
console.log(productFib(5895)) // [89, 144, false])
console.log(productFib(74049690)) // [6765, 10946, true])
console.log(productFib(84049690)) // [10946, 17711, false])
console.log(productFib(193864606)) // [10946, 17711, true])
console.log(productFib(447577)) // [610, 987, false])
console.log(productFib(602070)) // [610, 987, true])