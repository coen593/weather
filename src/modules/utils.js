const makeElement = (tag, classes, innerText, attributes) => {
  const element = document.createElement(tag);
  if (classes) {
    classes.forEach((c) => {
      element.classList.add(c);
    });
  }
  if (innerText) element.innerHTML = innerText;
  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  return element;
};

const removeChildElements = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const kToC = (k) => k - 273.15;

const kToF = (k) => ((k - 273.15) * 9) / 5 + 32;

export { 
    makeElement, 
    removeChildElements, 
    capitalizeFirstLetter, 
    kToC, 
    kToF 
};
