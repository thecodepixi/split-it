const Split = {
  /**
   * Accepts an optional delimiter argument.
   * Defaults to splitting on whitespace only
   * @param str the string to split
   * @param del the chosen delimiter on which to split the given string
   */
  on_delimiter: (str, del = null) => {
    return str.split(/\s/g);
  },
};
