# i18n-list-generator.js

Generate localized lists

[![Travis build status](http://img.shields.io/travis/jmeas/i18n-list-generator.js.svg?style=flat)](https://travis-ci.org/jmeas/i18n-list-generator.js)
[![Code Climate](https://codeclimate.com/github/jmeas/i18n-list-generator.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/i18n-list-generator.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/i18n-list-generator.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/i18n-list-generator.js)
[![Dependency Status](https://david-dm.org/jmeas/i18n-list-generator.js.svg)](https://david-dm.org/jmeas/i18n-list-generator.js)
[![devDependency Status](https://david-dm.org/jmeas/i18n-list-generator.js/dev-status.svg)](https://david-dm.org/jmeas/i18n-list-generator.js#info=devDependencies)

### Motivation

Generating dynamic lists is something that often needs to be handled in your
application logic. This is because common i18n formats don't supply a syntax
for translating dynamic lists.

For instance, the ICU Message Format, a popular syntax, does not support dynamic
lists.

In a LTR world, generating dynamic lists is straightforward: `myList.join(', ')`.
Things get more complex in RTL languages. Some languages, like Arabic, use a
reverse comma and place the space "before" (when read left-to-right) the comma.

Hebrew is also RTL, but uses the English version of the comma.

This library abstracts that logic away.

### Getting Started

The recommended way to install this library is through
[npm](https://nodejs.org/en/download/).

```
npm i i18n-list-generator.js
```

Then, import the library in your application.

```js
import generateList from 'i18n-list-generator';

generateList([1, 2, 3], 'en');
```

### API

##### `generateList( arr, languageCode )`

`arr` is the list of items. Any array-like object works as long as it implements
the `join` and `reverse` methods.

`languageCode` is any ISO 639-1 language code.

### Example Usage

```js
const myArr = [1, 2, 3];

generateList([1, 2, 3], 'ar')
// => '3 ،2 ،1'

generateList([1, 2, 3], 'he')
// => '3 ,2 ,1'

generateList([1, 2, 3], 'en')
// => '1, 2, 3'
```
