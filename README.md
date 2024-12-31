# JavaScript Falsy Value Handling Bug

This repository demonstrates a common JavaScript bug related to the incorrect handling of falsy values. The `foo` function intends to add two numbers, but it only explicitly checks for 0, leading to unexpected results when other falsy values are provided as input.  The solution provided addresses this by properly handling various falsy values.

## Bug
The `bug.js` file contains the buggy code.  The function `foo` incorrectly handles falsy values, returning `NaN` instead of performing addition or returning an appropriate default value.

## Solution
The `bugSolution.js` file demonstrates the corrected code. The solution uses a more robust check for falsy values, providing a more reliable output.  It explicitly checks for `null` and `undefined` before coercing to numbers.