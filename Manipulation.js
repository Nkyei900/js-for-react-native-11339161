//Task 1

function processArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]

//Task 2
function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    if (numbers[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}