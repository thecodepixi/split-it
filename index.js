const SPECIAL = ['[', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

const Split = {
  /**
   * Accepts an optional delimiter argument.
   * Defaults to splitting on whitespace only
   * @param str the string to split
   * @param del the chosen delimiter on which to split the given string
   */
  onDelimiter: (str, del = null) => {
    if (del) {
      let escape = SPECIAL.includes(del) ? '\\' : '';
      let re = new RegExp(escape + del, 'g');
      return str.split(re);
    } else {
      return str.split(/\s/g);
    }
  },
};
