const makeElement = (tag, classes, innerText, attributes) => {
    const element = document.createElement(tag);
    if (classes) {
        classes.forEach((c) => {
            element.classList.add(c);
        });
    }
    if (innerText) element.innerText = innerText;
    if (attributes) {
        Object.keys(attributes).forEach((key) => {
            element.setAttribute(key, attributes[key]);
        });
    }

    return element;
};

export { makeElement };
