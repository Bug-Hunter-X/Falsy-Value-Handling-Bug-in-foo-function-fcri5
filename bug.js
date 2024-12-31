function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle other falsy values
  }
  return a + b;
}

console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // 0
console.log(foo(false, 1)); // NaN instead of 1
console.log(foo(1, false)); // NaN instead of 1
console.log(foo(null,1)); //NaN instead of 1
console.log(foo(1,null)); //NaN instead of 1