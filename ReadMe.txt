ID: 11339161

# Array Manipulation and User Profile Creation

This project contains functions to process arrays of numbers and strings and to create user profiles. The project is divided into two tasks:

2. Array Manipulation
3. User Profile Creation

## Task 1: Process Array

processArray is a JavaScript function that processes an array of numbers. For each number in the input array, the function will:

Square the number if it is even.
Triple the number if it is odd.
The function returns a new array containing the processed numbers.

## Task 2: Array Manipulation

### Functions in `arrayManipulation.js`

#### `processArray(arr)`

This function takes an array of numbers as input and returns a new array where each even number is squared and each odd number is tripled.

**Usage:**
```javascript
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

## Task 3: User Profile Creation

createUserProfiles(names, modifiedNames)
This function takes two arrays as arguments:

An array of original names.
An array of modified names from Task 1.
The function returns an array of objects, each containing:

originalName: the original name.
modifiedName: the modified name.
id: an auto-incremented ID starting from 1.

