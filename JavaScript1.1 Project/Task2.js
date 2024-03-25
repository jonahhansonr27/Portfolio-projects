// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`). The types of triangles are equilateral, isosceles, and scalene.

var side1 = 8;
var side2 = 8;
var side3 = 8;
var triangleType;

if (side1 === side2 && side2 === side3) {
  triangleType = 'equilateral'
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  triangleType = 'isosceles'
} else {
  triangleType = 'scalene'
}

console.log("Triangle type: " + triangleType);

// 2. Write a JavaScript program that counts the number of occurrences of a specific element in an array using a for...of loop.

function countOccurrences(arr, target) {
  var count = 0;

  for (const element of arr) {
    if (element === target) {
    count++;
    }
  }

  return count;
}
  
const numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(numbers, 2));

// 3. Write a function that takes an array of product prices and returns the total price. 
//You can assume that the array contains only numbers.

function calculateTotalPrice(prices) {
  var totalPrice = 0;

  for (i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  }

  return totalPrice;
}

var productPrices = [1, 20, 30, 40];
console.log(calculateTotalPrice(productPrices)); 


// 4. Write a function that takes an array of product prices and a discount percentage. 
//Apply the discount to each product price and return the updated prices as an array.

function applyDiscount(prices, discount) {
  var discountedPrices = [];

  for (var i = 0; i < prices.length; i++) {
      var discountedPrice = prices[i] - (prices[i] * discount / 100);
      discountedPrices.push(discountedPrice);
  }

  return discountedPrices;
}

var productPrices = [10, 20, 30, 40];
var discountPercentage = 20;
console.log(applyDiscount(productPrices, discountPercentage));

// 5. Write a function that takes an array of product quantities and 
//returns an array of indices for products that are out of stock (quantity is 0).

function getOutOfStockProducts(quantities) {
  var outOfStockIndices = [];

  for (var i = 0; i < quantities.length; i++) {
      if (quantities[i] === 0) {
          outOfStockIndices.push(i);
      }
  }

  return outOfStockIndices;
}

var productQuantities = [2, 0, 4, 0, 3];
console.log(getOutOfStockProducts(productQuantities));
