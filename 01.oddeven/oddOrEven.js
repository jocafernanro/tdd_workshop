const oddOrEven = (number) => {
  const isOdd = (value) => value % 2 !== 0;
  if (number === [1]) return "odd";
  return isOdd(number) ? "odd" : "even";
};

module.exports = oddOrEven;
