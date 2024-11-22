
const highAndLow = numbers => {
  numbers = numbers.split(" ")
  const max = Math.max.apply(null, numbers);
  const min = Math.min.apply(null, numbers);
  return max + " " + min
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")//, "42 -9");
highAndLow("1 2 3")//, "3 1");