# Debug

- Continue (F5):
  - Resumes execution until next breakpoint. If none are found, runs program to completion
- Step over (F10):
  - Executes current line and moves to next line in the same function
  - If the current line contains a function call, it doesn’t enter the function.
- Step Into (F11):
  - Executes current line and, if it contains a function call, steps inside the function
  - If the current line isn’t a function call, it behaves like ’Step Over’
- Step out (Shift + F11):
  - Executes the remaining lines of the current function and returns to the caller
  - Useful for quickly exiting a function and resuming debugging at the higher level of the call stack
