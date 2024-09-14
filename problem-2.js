// ### Task -2:
// Find the friend with the smallest name.

// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// *** answer ***

function findSmallestName(names) {
  let smallestName = names[0];

  for (const name of names) {
    if (smallestName < name) {
      smallestName = name;
    }
  }
  return smallestName;
}

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed", "ts"];
const result = findSmallestName(heights2);
console.log("The  smallest name is:", result);
