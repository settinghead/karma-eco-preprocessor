# karma-eco-preprocessor

> Preprocessor to compile ECO Templates on the fly.

## Installation

The easiest way is to keep `karma-eco-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-eco-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-eco-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.eco': ['eco']
    },

    ecoPreprocessor: {
      // options passed to the eco compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.js$/, '.eco');
      }
    }
  });
};
```

If you set the `sourceMap` eco compiler option to `true` then the generated source map will be inlined as a data-uri.

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
