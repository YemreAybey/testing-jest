import caesar from '../modules/caesar';

it('can shift single word', () => {
  expect(caesar('aaa', 1)).toBe('bbb');
});

it('letter case doesnt matter', () => {
  expect(caesar('abZ', 1)).toBe('bcA');
});

it('Doesnt shift punctuation', () => {
  expect(caesar('I, say zZz!', 1)).toBe('J, tbz aAa!');
});

it('Can shift any letter', () => {
  expect(caesar('Please, ignore me friEnd Of Mine ZZzz!!!!', 12)).toBe(
    'Bxqmeq, uszadq yq rduQzp Ar Yuzq LLll!!!!'
  );
});
