const oddOrEven = (input) => {
  const result = input.reduce((prevVal, val) => prevVal + val, 0);
  const isOdd = (value) => value % 2 !== 0;
  return isOdd(result) ? "odd" : "even";
};

module.exports = oddOrEven;
