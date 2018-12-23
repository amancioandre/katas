function rot13(str) {
  return str.split('').map((l, i) => {
    /* Using ASCII HTML TABLE UTF-16 */
    let code = l.charCodeAt(0);
    if (code > 96) { //LOWERCASE LETTERS
      if (code > 122) {
        return String.fromCharCode(code);
      } else if (code + 13 > 122) {
        return String.fromCharCode(13 + 96 - (122 - code));
      } else {
        return String.fromCharCode(code + 13);
      }
    } else if (code > 65) { //UPPERCASE LETTERS
      if (code > 90) {
        return String.fromCharCode(code);
      } else if (code + 13 > 90) {
        return String.fromCharCode(13 + 64 - (90 - code));
      } else {
        return String.fromCharCode(code + 13);
      }
    } else {
      return String.fromCharCode(code);
    }
  }).join('')
}

/* Refactoring */
function rot13_2 (message) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const crypt = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => crypt[a.indexOf(c)]);
}

console.log(rot13_2('test 2'));
console.log(rot13_2('Test 2'));
