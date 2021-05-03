const SPECIAL = ['[', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

class Split {
  /**
   * The base method of the split-it library.
   * Splits a given string on all "classic" delimiters:
   * commas, colons, tabs, and returns
   *
   * @param {string} str the string to split
   */
  it = (str) => {
    return str.split(/,|:|\t|\r\n|\r|\n/g);
  };

  /**
   * Accepts an optional delimiter argument.
   * Defaults to splitting on whitespace only
   * @param {string} str the string to split
   * @param {string} del the chosen delimiter on which to split the given string
   */
  onDelimiter = (str, del = null) => {
    if (del) {
      let escape = SPECIAL.includes(del) ? '\\' : '';
      let re = new RegExp(escape + del, 'g');
      return str.split(re);
    } else {
      return str.split(/\s/g);
    }
  };

  /**
   *
   * @param {string} data the csv data to be manipulated
   * @param options an object containing boolean values for "headings" and "splitOnColumns"
   * @return {string[]} the passed in csv data will be split into an array of arrays, with each sub-array representing a single row or column of data. 
   */
  csv = (data, { headings = true, splitOnColumns = false } = {}) => {
    let rows = data.split(/\r\n|\n|\r/g).map((row) => row.split(/,\s+/g));
    let returnData = [];

    if (splitOnColumns) {
      console.log("columns")
      let rowsLength = rows[0].length; // 4
      for( let i = 0; i < rowsLength; i++) {
        let j = 0;
        returnData[i] = [];
        while( j < 13) {
          returnData[i].push( rows[j][i] );
          j++
        }
      }
    } else {
      returnData = rows;
    }

    if (!headings) {
      returnData.shift();
      returnData.forEach((row) => row.shift());
    }

    return returnData;
  };
}

module.exports = new Split();
