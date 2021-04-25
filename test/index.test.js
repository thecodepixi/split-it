import Split from '../index';

describe('onDelimiter', () => {
  test('splits on whitespace by default', () => {
    let str = 'hello from split-it';
    let expected = ['hello', 'from', 'split-it'];
    expect(Split.onDelimiter(str)).toEqual(expected);
  });

  test('splits on the given delimiter when one is passed', () => {
    let str = 'hello.from.split-it';
    let str2 = 'hello1from1split-it';
    let str3 = 'hello,from,split-it';
    let expected = ['hello', 'from', 'split-it'];

    expect(Split.onDelimiter(str, '.')).toEqual(expected);
    expect(Split.onDelimiter(str2, '1')).toEqual(expected);
    expect(Split.onDelimiter(str3, ',')).toEqual(expected);
  });
});
