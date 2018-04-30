"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerHeightObserver(element, options, callback) {
    var opts;
    var cbk;
    if (!callback) {
        cbk = options;
        opts = {};
    }
    else {
        opts = options;
        cbk = callback;
    }
    var iframe = document.createElement('IFRAME');
    iframe.style.pointerEvents = 'none';
    iframe.style.position = 'absolute';
    iframe.style.display = 'block';
    iframe.style.overflow = 'auto';
    if (!opts || opts.direction === 'vertical') {
        iframe.style.height = '100%';
        iframe.style.width = '0';
    }
    else if (opts.direction === 'horizontal') {
        iframe.style.height = '0';
        iframe.style.width = '100%';
    }
    else {
        iframe.style.height = '100%';
        iframe.style.width = '100%';
    }
    iframe.style.top = '0';
    iframe.style.bottom = '0';
    iframe.style.left = '0';
    iframe.style.border = '0';
    iframe.style.backgroundColor = 'transparent';
    iframe.className = 'element-height-observer-iframe';
    iframe.onload = function () {
        iframe.contentWindow.addEventListener('resize', function () {
            cbk();
        });
    };
    element.appendChild(iframe);
    if (element.style.position === 'static' || element.style.position === '') {
        element.style.position = 'relative';
    }
}
exports.registerHeightObserver = registerHeightObserver;
function unregisterHeightObserver(element) {
    for (var i = element.children.length - 1; i >= 0; i--) {
        var childElem = element.children.item(i);
        if (childElem.getAttribute('class') === 'element-height-observer-iframe') {
            childElem.remove();
        }
    }
}
exports.unregisterHeightObserver = unregisterHeightObserver;
//# sourceMappingURL=index.js.map