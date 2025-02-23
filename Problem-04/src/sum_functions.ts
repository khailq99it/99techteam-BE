/**
 * Problem 1: Three ways to sum to n
 * Provide 3 unique implementations of the following function in JavaScript.
 * Input: n - any integer
 * Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER.
 * Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
 */

/**
 * Sums the numbers from 1 to n using a loop.
 * Time complexity: O(n)
 * @param {number} n The upper limit of the summation.
 * @returns {number} The sum of numbers from 1 to n.
 */
var sum_to_n_a = function(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

/**
 * Sums the numbers from 1 to n using recursion.
 * Time complexity: O(n)
 * @param {number} n The upper limit of the summation.
 * @returns {number} The sum of numbers from 1 to n.
 */
var sum_to_n_b = function(n: number): number {
  if (n <= 0) {
    return 0;
  }
  return n + sum_to_n_b(n - 1);
};

/**
 * Sums the numbers from 1 to n using the arithmetic progression formula.
 * Time complexity: O(1)
 * @param {number} n The upper limit of the summation.
 * @returns {number} The sum of numbers from 1 to n.
 */
var sum_to_n_c = function(n: number): number {
  if (n <= 0) {
    return 0;
  }
  return (n * (n + 1)) / 2;
};

export {
  sum_to_n_a,
  sum_to_n_b,
  sum_to_n_c
};