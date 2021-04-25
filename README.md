# split-it

split-it is a tiny javascript package designed to provide convenience methods for splitting strings in a variety of ways.

## Installation

this package can be installed using either `npm` or `yarn`

### `npm` installation

`npm install split-it`

### `yarn` installation`

`yarn add split-it`

### Importing the package in your project

after adding the package to your project, you can import the main class `Split` to use the available methods:

`import Split from 'split-it'`

## Available Methods

### `onDelimiter`

`onDelimiter` splits the given string by the given delimiter.
this method defaults to splitting on whitespace if no delimiter is passed.

**Example Usage**

```js
Split.onDelimiter('hello.from.split-it', '.');
Split.onDelimiter('hello*from*split-it', '*');
Split.onDelimiter('hello|from|split-it', '|');
// all of the above return ["hello", "from", "split-it"]
```
