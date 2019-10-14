import capitalize from '../modules/capitalize';

it('capitalize string', () => {
  expect(capitalize('test')).toEqual('Test');
});
