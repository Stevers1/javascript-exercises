# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  As you can do with any Array-like object, you can use Array.from() method or spread syntax to convert arguments to a real Array:

const args = Array.from(arguments);
// or
const args = [...arguments];

The arguments object is useful for functions called with more arguments than they are formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments, such as Math.min(). This example function accepts any number of string arguments and returns the longest one:

function longestString() {
  let longest = '';
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

You can use arguments.length to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's length property.
Using typeof with arguments

The typeof operator returns 'object' when used with arguments

console.log(typeof arguments); // 'object'

The type of individual arguments can be determined by indexing arguments:

console.log(typeof arguments[0]); // returns the type of the first argument

Properties

arguments.callee

    Reference to the currently executing function that the arguments belong to. Forbidden in strict mode.
arguments.length

    The number of arguments that were passed to the function.
arguments[@@iterator]

