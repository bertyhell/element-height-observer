export function registerHeightObserver(element: HTMLElement, callback: () => void) {
    let iframe: HTMLIFrameElement = document.createElement('IFRAME') as HTMLIFrameElement;
    iframe.style.pointerEvents = 'none';
    // iframe.style.opacity = '0';
    iframe.style.position = 'absolute';
    iframe.style.display = 'block';
    iframe.style.overflow = 'auto';
    iframe.style.height = '100%';
    iframe.style.width = '0';
    iframe.style.top = '0';
    iframe.style.bottom = '0';
    iframe.style.left = '0';
    iframe.style.border = '0';
    iframe.style.backgroundColor = 'transparent';

    // Debug styles for making the iframe visible in the test.html page
    // iframe.style.border = '5px solid red';
    // iframe.style.boxSizing = 'border-box';
    // iframe.style.width = '20px';

    iframe.className = 'element-height-observer-iframe';
    iframe.onload = () => {
        iframe.contentWindow.addEventListener('resize', () => {
            callback();
        });
    };
    element.appendChild(iframe);

    if (element.style.position === 'static' || element.style.position === '') {
        element.style.position = 'relative';
    }
}

export function unregisterHeightObserver(element: HTMLElement) {
    for (let i = element.children.length - 1; i >= 0; i--) {
        let childElem: HTMLElement = element.children.item(i) as HTMLElement;
        if (childElem.getAttribute('class') === 'element-height-observer-iframe') {
            childElem.remove();
        }
    }
}
