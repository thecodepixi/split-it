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
    return str.split(/,|:|\t|\r|\n/g);
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
}

module.exports = new Split();
