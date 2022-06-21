const fizzbuzz = (number) => {
  let result = number;
  if (typeof number !== "number" || number < 1)
    return "Error, the value must be greater than 0";

  if (number % 3 === 0) result = "fizz";

  return result;
};

module.exports = fizzbuzz;
