# Element height observer

This library allows you to add an observer for page or element height. Each time the page changes height, a callback will be called.

No dependencies, total library minified is less than 0.9 KB

## Install

```commandline
npm install element-height-observer --save
```

## Use

When the page has loaded, you can register the oberver like this:

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

## Inspiration

This library is inspired by [a stackoverflow post](https://stackoverflow.com/a/43081335/373207) by [Jake](https://stackoverflow.com/users/2511031/jake)