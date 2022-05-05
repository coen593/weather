import { removeChildElements } from "./utils";
import { searchBox } from "./components/search";
import { weatherInfo } from "./components/weatherInfo";
import { weatherDetails } from "./components/weatherDetails";
import { tempSwitch } from "./components/tempSwitch";


const convertUnitsDOM = () => {
  const unit = window.localStorage.temp;
  const elements = document.querySelectorAll(".switch");
  elements.forEach((element) => {
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

const renderWeather = (weather, address) => {
  const container = document.querySelector(".container");
  removeChildElements(container);
  container.appendChild(weatherInfo(weather, address));
  container.appendChild(weatherDetails(weather))
  container.appendChild(searchBox());
  const switchButton = tempSwitch();
  container.appendChild(switchButton);
  switchButton.addEventListener("click", () => switchMeasure());
  convertUnitsDOM();
};

export { renderWeather };
