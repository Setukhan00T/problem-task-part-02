// ### Task -1:
// Find the lowest number in the array below.

// `const heights2 = [167, 190, 120, 165, 137];`

// *** answer ***

function minNumber(numbers) {
  let min = numbers[0];

  for (const number of numbers) {
    if (min > number) {
      min = number;
    }
  }
  return min;
}

const heights2 = [167, 190, 120, 165, 137, 90, 180, 150];

const result = minNumber(heights2);
console.log("The min number is :", result);
