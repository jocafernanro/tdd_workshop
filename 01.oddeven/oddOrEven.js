const oddOrEven = (number) => {
  const isOdd = (value) => value % 2 !== 0;
  return isOdd(number) ? "odd" : number;
};

module.exports = oddOrEven;
