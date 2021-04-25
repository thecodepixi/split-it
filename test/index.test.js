import Split from '../index';

const expected = ['hello', 'from', 'split-it'];

describe('Split', () => {
  describe('.it', () => {
    test('returns an array with an empty string when one is passed', () => {
      expect(Split.it('')).toEqual(['']);
    });

    test('splits a given string on commas', () => {
      let str = 'hello,from,split-it';

      expect(Split.it(str)).toEqual(expected);
    });

    test('splits a given string on colons', () => {
      let str = 'hello:from:split-it';

      expect(Split.it(str)).toEqual(expected);
    });

    test('splits a given string on tab spaces', () => {
      let str = 'hello\tfrom\tsplit-it';

      expect(Split.it(str)).toEqual(expected);
    });

    test('splits a given string on line breaks and returns', () => {
      let str = 'hello\nfrom\rsplit-it';

      expect(Split.it(str)).toEqual(expected);
    });
  });

  describe('.onDelimiter', () => {
    test('returns an array with an empty string when one is passed', () => {
      expect(Split.onDelimiter('')).toEqual(['']);
    });

    test('splits on whitespace by default', () => {
      let str = 'hello from split-it';

      expect(Split.onDelimiter(str)).toEqual(expected);
    });

    test('splits on the given delimiter when one is passed', () => {
      let str = 'hello.from.split-it';
      let str2 = 'hello1from1split-it';
      let str3 = 'hello,from,split-it';

      expect(Split.onDelimiter(str, '.')).toEqual(expected);
      expect(Split.onDelimiter(str2, '1')).toEqual(expected);
      expect(Split.onDelimiter(str3, ',')).toEqual(expected);
    });

    test('accurately splits when the delimiter must be escaped', () => {
      let str = 'hello|from|split-it';
      let str2 = 'hello?from?split-it';
      let str3 = 'hello*from*split-it';

      expect(Split.onDelimiter(str, '|')).toEqual(expected);
      expect(Split.onDelimiter(str2, '?')).toEqual(expected);
      expect(Split.onDelimiter(str3, '*')).toEqual(expected);
    });
  });
});
