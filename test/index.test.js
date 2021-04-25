import Split from '../index';

test('onDelimiter splits on whitespace by default', () => {
  let str = 'hello from split-it';
  let expected = ['hello', 'from', 'split-it'];
  expect(Split.onDelimiter(str)).toEqual(expected);
});
