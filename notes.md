# `var`

- declaring a `var` at the **top level** of a program creates a property on the
  global object (e.g. `global` or `window`); it won't do that inside a function
- `var` is function-scoped - i.e. it doesn't care about your blocks of curly
  braces (but remember, not everything in curly braces is a block)
- Good grief, a `var` declaration within a block scope declares the variable
  even if the code in the block doesn't run (but doesn't initialize it except to
  `undefine`).

# hoisting

- don't nest function declarations inside non-function blocks as you may get
  inconsistent behavior. Use function expressions if you have to do this.

# Side effects

A function call that does any of the following has **side effects**:

1. **side effects through reassignment** - reassigns a non-local variable
2. **side effects through mutation** - mutates the value of any object
   referenced by a non-local variable
3. **side effects through input/output** - reads or writes to any data entity
   (files, network connections, etc.) that is non-local to your program. Note
   that this includes:
   1. reading from the keyboard
   2. writing to the console
   3. accessing the system date (`new Date()`)
   4. generating a random number (`Math.random()`)
4. **side effects through exceptions** - raises an exception without catching
   and handling it.
5. **side effects through other functions** - calls another function that has
   side effects that are not confined to the current function.

**Pure functions** have no side effects and always return the same value for the
same set of inputs.
