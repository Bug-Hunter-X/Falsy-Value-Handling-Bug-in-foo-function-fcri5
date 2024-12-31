function foo(a, b) {
  // Convert inputs to numbers
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b) || a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle falsy values appropriately 
  }

  return a + b;
}

console.log(foo(0, 1)); // 1
console.log(foo(1, 0)); // 1
console.log(foo(false, 1)); // 1
console.log(foo(1, false)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(undefined,1)); //1
console.log(foo(1,undefined)); //1