import {
  makeElement,
  getWindDirection,
  kToC,
  kToF,
  round,
  msToKmh,
  msToMh,
} from "../utils";

const weatherDetails = (weather) => {
  const container = makeElement("div", ["weather-details"]);

  const feelsLabel = makeElement(
    "span",
    ["detail", "label", "feels"],
    "Feels like"
  );
  const feelsI = makeElement(
    "span",
    ["switch", "imperial", "detail"],
    `${round(kToF(weather.current.feels_like), 0)} &deg;F`
  );
  const feelsM = makeElement(
    "span",
    ["switch", "metric", "detail"],
    `${round(kToC(weather.current.feels_like), 0)} &deg;C`
  );
  container.appendChild(feelsLabel);
  container.appendChild(feelsI);
  container.appendChild(feelsM);

  const humidLabel = makeElement(
    "span",
    ["detail", "label", "humidity"],
    "Humidity"
  );
  const humidity = makeElement(
    "span",
    ["detail"],
    `${weather.current.humidity}%`
  );
  container.appendChild(humidLabel);
  container.appendChild(humidity);

  const rainLabel = makeElement(
    "span",
    ["detail", "label", "rain"],
    "Chance of rain"
  );
  const rain = makeElement(
    "span",
    ["detail"],
    `${round(weather.daily[0].rain, 0)}%`
  );
  container.appendChild(rainLabel);
  container.appendChild(rain);

  const windLabel = makeElement(
    "span",
    ["detail", "label", "wind"],
    "Wind speed and direction"
  );
  const windDirection = getWindDirection(weather.current.wind_deg);
  const windI = makeElement(
    "span",
    ["switch", "imperial", "detail"],
    `${round(msToMh(weather.current.wind_speed), 1)} mph ${windDirection}`
  );
  const windM = makeElement(
    "span",
    ["switch", "metric", "detail"],
    `${round(msToKmh(weather.current.wind_speed), 1)} km/h ${windDirection}`
  );
  container.appendChild(windLabel);
  container.appendChild(windI);
  container.appendChild(windM);

  const uvlabel = makeElement("span", ["detail", "label", "UV"], "UV index");
  const uv = makeElement('span',['detail'], `${weather.current.uvi}`)
  container.appendChild(uvlabel)
  container.appendChild(uv)

  return container;
};

export { weatherDetails };
