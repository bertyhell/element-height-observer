# Element height observer

This library allows you to add an observer for page or element height. Each time the page changes height, a callback will be called.

No dependencies, total library minified is less than 0.9 KB

## Install

```commandline
npm install element-height-observer --save
```

## Use

Load the script:
```html
<html>
    <head>
        <script src="node_modules/element-height-observer/dist/index.js"></script>
    </head>
</html>
```

Or import it:
```javascript
var heightObserver = require('element-height-observer');
var registerHeightObserver = heightObserver.registerHeightObserver;
var unregisterHeightObserver = heightObserver.unregisterHeightObserver;
```

Or import it (ES6 modules notation):
```javascript
import { registerHeightObserver, unregisterHeightObserver } from 'element-height-observer';
```

When the page has loaded, you can register the observer like this:

```javascript
window.addEventListener('load', function () {
    var someElement = document.querySelector('#someElementId');
    registerHeightObserver(someElement, function () {
        // Your code that you want to execute when the element changes height
    })
});
```

You can only add one listener per element, otherwise the unregister mechanism won't work correctly.

```javascript
var someElement = document.querySelector('#someElementId');
unregisterHeightObserver(someElement);
```

## API

There are 2 functions available:
* registerHeightObserver(elementToWatch, options?, callback)
* unregisterHeightObserver(elementToStopWatching)

The options are optional and can currently only specify which dimension of the element it should watch for:
```typescript
{
    direction: 'horizontal' | 'vertical' | 'both'
}
```
The default is 'vertical'

The callback doesn't get passed any parameters:
```typescript
callback: () => void
```

## Inspiration

This library is inspired by [a stackoverflow post](https://stackoverflow.com/a/43081335/373207) by [Jake](https://stackoverflow.com/users/2511031/jake)