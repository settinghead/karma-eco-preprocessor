# karma-eco-preprocessor

> Preprocessor to compile ECO Templates. Source code derived from [Karma HTML2JS Preprocessor](https://github.com/karma-runner/karma-html2js-preprocessor)

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
var path = require('path');
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.eco': ['eco']
    },

    ecoPreprocessor: {
      // options passed to the eco compiler
      options: {
        baseTemplatePath: path.join(__dirname, 'app/assets/templates'),
        enableJSTGlobalVariable: true
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.js$/, '.eco');
      }
    }
  });
};
```


----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
