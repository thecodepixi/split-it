const Split = require('../index');
const fs = require('fs');

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
      let str2 = 'hello\r\nfrom\rsplit-it';

      expect(Split.it(str)).toEqual(expected);
      expect(Split.it(str2)).toEqual(expected);
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

  describe('.csv', () => {
    const DATA = fs.readFileSync('test.csv', { encoding: 'utf-8' });

    test('splits csv data into a multi-array array', () => {
      let parsed = Split.csv(DATA);

      expect(parsed.length).toEqual(13);

      parsed.forEach((arr) => {
        expect(arr.length).toEqual(4);
      });
    });

    test('removes headings when option is passed as false', () => {
      let parsed = Split.csv(DATA, { headings: false });

      expect(parsed.length).toEqual(12);

      parsed.forEach((arr) => {
        expect(arr.length).toEqual(3);
      });
    });

    test('rotates data to make arrays of columns when option is passed', () => {
      let parsed = Split.csv(DATA, { splitOnColumns: true });
      let expectedHeadings = [
        '"Month"',
        '"JAN"',
        '"FEB"',
        '"MAR"',
        '"APR"',
        '"MAY"',
        '"JUN"',
        '"JUL"',
        '"AUG"',
        '"SEP"',
        '"OCT"',
        '"NOV"',
        '"DEC"',
      ];
      
      expect(parsed.length).toEqual(4);
      expect(parsed[0].length).toEqual(13);
      expect(parsed[0]).toEqual(expectedHeadings);
    });
  });
});
