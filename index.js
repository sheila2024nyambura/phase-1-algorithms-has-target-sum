function hasTargetSum(array, target) {
  // Write your algorithm here
  //solution
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
   // O(n^2) - It has a quadratic time complexity due to the nested loops.
*/

/* 
  Add your pseudocode here
  // No pseudocode provided in the original code.
  // Let's add pseudocode for clarity:
  // Iterate through the array using two loops (nested).
  // For each pair of elements, check if their sum is equal to the target.
  // If a pair with the target sum is found, return true.
  // If no such pair is found after checking all pairs, return false.
*/

/*
  Add written explanation of your solution here
  // The function iterates through the array using nested loops to check all pairs of elements.
  // For each pair, it checks if their sum equals the target.
  // If a pair is found that adds up to the target, the function returns true.
  // If no such pair is found, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
