const fizzbuzz = (number) => {
  if (typeof number !== "number" || number < 1)
    return "Error, the value must be greater than 0";

  const isMultipleOf = (divisor, value) => value % divisor === 0;
  let output = "";

  if (isMultipleOf(3, number)) output += "fizz";
  if (isMultipleOf(5, number)) output += "buzz";
  if (output === "") output = number;

  return output;
};

module.exports = fizzbuzz;
