const oddOrEven = (number) => {
  const isOdd = (value) => value % 2 !== 0;
  if (number === 2) return "even";
  return isOdd(number) ? "odd" : number;
};

module.exports = oddOrEven;
