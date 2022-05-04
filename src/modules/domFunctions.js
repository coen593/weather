import { makeElement, removeChildElements } from "./utils";
import { searchBox } from "./components/search";
import { weatherInfo } from "./components/weatherInfo";
import { tempSwitch } from "./components/tempSwitch";

const convertUnitsDOM = () => {
  const unit = window.localStorage.temp;
  const elements = document.querySelectorAll(".switch");
  elements.forEach((element) => {
      console.log(element)
    if (element.classList.contains(unit)) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};

const switchMeasure = () => {
  if (window.localStorage.temp === "metric") {
    window.localStorage.temp = "imperial";
  } else {
    window.localStorage.temp = "metric";
  }
  convertUnitsDOM();
};

const initUI = () => {
  const container = makeElement("div", ["container"]);
  document.body.appendChild(container);
  container.appendChild(searchBox());
  const switchButton = tempSwitch();
  container.appendChild(switchButton);
  switchButton.addEventListener("click", () => switchMeasure());
  convertUnitsDOM()
};

const renderWeather = (json, address) => {
  const container = document.querySelector(".container");
  removeChildElements(container);
  container.appendChild(weatherInfo(json, address));
  container.appendChild(searchBox());
  const switchButton = tempSwitch();
  container.appendChild(switchButton);
  switchButton.addEventListener("click", () => switchMeasure());
  convertUnitsDOM();
};

export { initUI, renderWeather };
