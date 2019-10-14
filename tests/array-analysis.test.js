import analyize from '../modules/array-analysis';

it('works with simple array', () => {
  expect(analyize([3, 6, 9])).toEqual({
    average: 6,
    min: 3,
    max: 9,
    length: 3
  });
});

it('works with float avg', () => {
  expect(analyize([3, 6, 9, 2, 4])).toEqual({
    average: 5,
    min: 2,
    max: 9,
    length: 5
  });
});
