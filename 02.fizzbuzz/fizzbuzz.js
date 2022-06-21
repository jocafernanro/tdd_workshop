const fizzbuzz = (number) => {
  if (typeof number !== "number" || number < 1)
    return "Error, the value must be greater than 0";
  return number;
};

module.exports = fizzbuzz;
