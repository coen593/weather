import { removeChildElements } from "./utils";
import { searchBox } from "./components/search";
import { weatherInfo } from "./components/weatherInfo";
import { weatherDetails } from "./components/weatherDetails";
import { tempSwitch } from "./components/tempSwitch";
import { weatherDaily } from "./components/weatherDaily";
import { weatherHourly } from "./components/weatherHourly";
import { dayHourSwitch } from "./components/dayHourSwitch";

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

const switchHourlyDaily = (input) => {
  const divs = document.querySelectorAll('.detail-container')
  divs.forEach(div => {
    div.classList.remove('active')
    if (div.classList.contains(input)) {
      div.classList.add('active')
    }
  })
  const buttons = document.querySelectorAll('.day-hour-switch')
  buttons.forEach(btn => {
    btn.classList.remove('active')
    if (btn.id === input) {
      btn.classList.add('active')
    }
  })
}

const switchMeasure = () => {
  if (window.localStorage.temp === "metric") {
    window.localStorage.temp = "imperial";
  } else {
    window.localStorage.temp = "metric";
  }
  convertUnitsDOM();
};

const dayHourListener = () => {
  const switches = document.querySelectorAll('.day-hour-switch')
  switches.forEach(s => {
    s.addEventListener('click', () => {
      switchHourlyDaily(s.id)
    })
  })
}

const renderWeather = (weather, address) => {
  const container = document.querySelector(".container");
  removeChildElements(container);
  container.appendChild(weatherInfo(weather, address));
  container.appendChild(weatherDetails(weather))
  container.appendChild(searchBox());
  const switchButton = tempSwitch();
  container.appendChild(switchButton);
  switchButton.addEventListener("click", () => switchMeasure());
  container.appendChild(dayHourSwitch())
  dayHourListener()
  container.appendChild(weatherHourly(weather))
  container.appendChild(weatherDaily(weather))
  convertUnitsDOM();
  switchHourlyDaily('day-switch')
};

export { renderWeather };
