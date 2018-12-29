/* Task
You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

Example
For s = "abc", the result should be "bac".

The permutations in order are:
"abc", "acb", "bac", "bca", "cab", "cba"
So, The middle term is "bac".
Input/Output
[input] string s

unique letters (2 <= length <= 26)

[output] a string

middle permutation */

// https://www.codewars.com/kata/simple-fun-number-159-middle-permutation

function middlePermutation(s) {
  let list = []

  const heap = (n, arr) => {
    if ( n === 0 ) { 
      list.push(arr.join(''))
      return arr }
    else {
      let temp;
      for (let i = 0; i < n - 1; i += 1) {
        heap(n - 1, arr)
        if ( n % 2 === 0) {
          temp = arr[i];
          arr[i] = arr[n - 1];
          arr[n - 1] = temp
        } else {
          temp = arr[0];
          arr[0] = arr[n - 1];
          arr[n - 1] = temp;
        }
      }
      heap(n - 1, arr)
    }
  }

  heap(s.length, s.split('').sort())
  console.log(list.slice().sort().splice(list.length/2 - 2, 4))
  return list.sort()[Math.floor(list.length/2 - 1)]
}


/* Refactor without Recursion */

/* function middlePermutation(s) {
  const list = [];
  const heap = (n, arr) => {
    const c = Array(n).fill(0)
    let i = 0;
    let temp;
    while( i < n) {
      if( c[i] < i) {
        if( i % 2 === 0) {
          temp = arr[0];
          arr[0] = arr[i];
          arr[i] = temp;
        } else {
          temp = arr[c[i]];
          arr[i] = arr[c[i]];
          arr[c[i]] = temp;
        }
        c[i] += 1
        i = 0;
        list.push(arr.join(''))
      } else {
        c[i] = 0;
        i += 1;
      }
    }
  }

  heap(s.length, s.split(''));
  return list
} */

/* function middlePermutation(s) {

  const permutation = (string) => {
    if (string.length < 2) return string
    let permut = [];
    for (let i = 0; i < string.length; i += 1) {
      let char = s[i]
  
      if(string.indexOf(char) != i) continue;
      let remaingString = string.slice(0, i) + string.slice(i+1, string.length);
      for (let subPermut of permutation(remaingString)) {
        permut.push(char + subPermut)
      }
    }
    return permut
  }

  return permutation(s)
} */ // Broken


/* Maybe, the strategy here is to predict which set of permutations would fall into the
middle of the array and then, permutate only those to find it's middle element */

function middlePermutation2(s) {
  const factorial = n => {
    return n === 0 ? 1 : n*factorial(n-1);
  }
  let mid = factorial(s.length)/2
  /* Choosing the fixed element: 
  If the string length is odd, then take the middle char,
  if even, take the first the char att middle - 1 */
  let l = s.length;
  const string = s.split('').sort().slice()
  if (l % 2 === 0) {
    /* Fix n/2 - 1 char  and add the remaining sorted and reversed, because we want the last one */
    const first = string.splice(l/2 - 1, 1).join('');
    const second = string.sort().reverse().join('');
    return first + second
  } else {
    /* Fix n/2 char and add the remaining sorted */
    const first = string.splice(l/2-1, l % 2 + 1).reverse().join('');
    const second = string.sort().reverse().join('');
    return first + second
  }
}
console.log(middlePermutation('abcdefghi'));
console.log(middlePermutation2('abcdefghi'));
