const analyize = arr => {
  const average = findAverage(arr);
  const [min, max] = findMinMax(arr);
  const length = arr.length;
  return { average, min, max, length };
};

const findMinMax = arr => {
  let min = Infinity;
  let max = -Infinity;
  arr.forEach(num => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });
  return [min, max];
};

const findAverage = arr => {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return Math.round(sum / arr.length);
};

export default analyize;
