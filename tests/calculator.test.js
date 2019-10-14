import calculator from '../modules/calculator';

const calc = calculator();

it('add two numbers', () => {
  expect(calc.add(2, 1)).toEqual(3);
});

it('divide two numbers', () => {
  expect(calc.divide(2, 1)).toEqual(2);
});

it('subtract two numbers', () => {
  expect(calc.subtract(2, 1)).toEqual(1);
});

it('multiply two numbers', () => {
  expect(calc.multiply(2, 1)).toEqual(2);
});
