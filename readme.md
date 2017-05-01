# Fabricator jQuery jsHide Component

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

## Installing

With Fabricator and NPM, simply require this library into your project and restart the Fabricator Grunt build process.

`npm install fab.jquery.has-scroll-bar --save`

If you are not using Fabricator, you will need to in some manner compile `src/jquery.jsHide.js` into your build process or put it somewhere where you can link it into your projects.

## Usage

### `$('.my-el').jsHide()`

Adds the class `js-hide`.

### `$('.my-el').jsShow()`

Adds the class `js-show`.
