// ### Task-3:
// Your task is to calculate the `total budget` required to buy electronics:

// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

// *** answer ***

function calculateElectronicsBudget(laptop, tablets, mobile) {
  const laptopPrice = 35000;
  const tabletsPrice = 15000;
  const mobilePrice = 20000;

  const total_money_required =
    laptop * laptopPrice + tablets * tabletsPrice + mobile * mobilePrice;
  return total_money_required;
}

const laptopQuantity = 1;
const tabletsQuantity = 1;
const mobileQuantity = 2;
const result = calculateElectronicsBudget(
  laptopQuantity,
  tabletsQuantity,
  mobileQuantity
);
console.log("Total money required :", result);
