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

const msToKmh = v => v * 3.6

const msToMh = v => v * 2.23694

const round = (num, dec) => Math.round(num * 10**dec) / 10**dec

const getWindDirection = deg => {
  switch(true) {
    case (deg > 348.75):
      return 'N'
    case (deg > 326.25):
      return 'NNW'
    case (deg > 303.75):
      return 'NW'
    case (deg > 281.25):
      return 'WNW'
    case (deg > 258.75):
      return 'W'
    case (deg > 236.25):
      return 'WSW'
    case (deg > 213.75):
      return 'SW'
    case (deg > 191.25):
      return 'SSW'
    case (deg > 168.75):
      return 'S'
    case (deg > 146.25):
      return 'SSE'
    case (deg > 123.75):
      return 'SE'
    case (deg > 101.25):
      return 'ESE'
    case (deg > 78.75):
      return 'E'
    case (deg > 56.25):
      return 'ENE'
    case (deg > 33.75):
      return 'NE'
    case (deg > 11.25):
      return 'NNE'
    default:
      return 'N'
  }
}

export { 
    makeElement, 
    removeChildElements, 
    capitalizeFirstLetter, 
    kToC, 
    kToF,
    msToKmh,
    msToMh,
    round,
    getWindDirection
};
