[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![github test workflow status](https://github.com/thecodepixi/split-it/actions/workflows/run-test.yaml/badge.svg)

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

### `.it`

`.it ` is the base method of this library.
this method splits the given string on _all_ classic delimiters:
commas, colons, tabs, newlines, and returns

**Example Usage**

```js
Split.it('hello,from,split-it');
Split.it('hello:from:split-it');
Split.it('hello\tfrom\tsplit-it');
Split.it('hello\nfrom\rsplit-it');

// all of the above return ["hello", "from", "split-it"]
```

### `.onDelimiter`

`.onDelimiter` splits the given string by the given delimiter.
this method defaults to splitting on whitespace if no delimiter is passed.

**Example Usage**

```js
Split.onDelimiter('hello.from.split-it', '.');
Split.onDelimiter('hello*from*split-it', '*');
Split.onDelimiter('hello|from|split-it', '|');

// all of the above return ["hello", "from", "split-it"]
```

## Contributing

want to contribute to `split-it`? sweet!
if you'd like to contribute, please open an issue relating to the feature you'd like to work on,
and then open a pr linked to your issue. when you open your pr, please add your changes to the [CHANGELOG](./CHANGELOG.md) under the `### added` or `### fixed` heading, as appropriate, with a link to your pr.

don't want to contribute code, but see something missing or broken? open an issue to report any bugs or errors you encounter.

### Code of Conduct

before opening an issue or pr, please read (and adhere) to the following:

- be respectful
- be polite
- use empathy
- do not post anything containing hate speech or slurs
- failure to adhere to the above may result in removal of access to this project
