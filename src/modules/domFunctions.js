import { makeElement, removeChildElements } from "./utils";
import { searchBox } from "./components/search";
import { weatherInfo } from "./components/weatherInfo";

const initUI = () => {
  const container = makeElement("div", ["container"]);
  document.body.appendChild(container);
  container.appendChild(searchBox());
};

const renderWeather = (json, address) => {
  const container = document.querySelector(".container");
  removeChildElements(container);
  container.appendChild(weatherInfo(json, address));
  container.appendChild(searchBox());
};

export { initUI, renderWeather };
