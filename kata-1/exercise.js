console.log(`
  Implement a function, that is able to find odd numbers in an array.

  Given a list of numbers from 1-100, the output should be similar to the following:

  1 is an odd number
  3 is an odd number
  5 is an odd number
  7 is an odd number

  Extra: Also output an additional message if the number is a prime number

  Extra: Adjust the input to be an array of numbers between 340-650

  Bonus: Define environment variables to make the input array arbitrary
`);

const isOdd = (list) => {
  // Loop through the list of numbers and log a message if the number is odd
};

isOdd(
  Array(100)
    .fill(1)
    .map((_, i) => i + 1)
);
