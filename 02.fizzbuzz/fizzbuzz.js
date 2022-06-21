const fizzbuzz = (number) => {
  if (typeof number !== "number" || number < 1)
    return "Error, the value must be greater than 0";

  const isMultipleOf3 = (value) => value % 3 === 0;
  const isMultipleOf5 = (value) => value % 5 === 0;
  const isMultipleOf3And5 = (value) =>
    isMultipleOf3(value) && isMultipleOf5(value);

  if (isMultipleOf3And5(number)) return "fizzbuzz";
  if (isMultipleOf3(number)) return "fizz";
  if (isMultipleOf5(number)) return "buzz";

  return number;
};

module.exports = fizzbuzz;
