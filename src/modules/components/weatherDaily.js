import { fromUnixTime, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { makeElement, kToC, kToF, round } from "../utils";

const weatherDaily = (weather) => {
  const container = makeElement("div", ["weather-daily"]);
  weather.daily.forEach((day) => {
    const dayDiv = makeElement("div", ["day-container"]);

    const dt = format(
      utcToZonedTime(fromUnixTime(day.dt), weather.timezone),
      "EEE"
    );
    const date = makeElement("span", ["weather-day"], dt);
    dayDiv.appendChild(date);

    const tempM = makeElement(
      "span",
      ["day-temp", "switch", "metric"],
      `${round(kToC(day.temp.day), 0)} &deg;C`
    );
    dayDiv.appendChild(tempM);
    const tempI = makeElement(
      "span",
      ["day-temp", "switch", "imperial"],
      `${round(kToF(day.temp.day), 0)} &deg;F`
    );
    dayDiv.appendChild(tempI);

    const minMaxStrM = `${round(kToC(day.temp.min), 0)} &deg;C - ${round(
      kToC(day.temp.max),
      0
    )} &deg;C`;
    const minMaxStrI = `${round(kToF(day.temp.min), 0)} &deg;F - ${round(
      kToF(day.temp.max),
      0
    )} &deg;F`;
    const minMaxM = makeElement(
      "span",
      ["day-minmax", "switch", "metric"],
      minMaxStrM
    );
    dayDiv.appendChild(minMaxM);
    const minMaxI = makeElement(
      "span",
      ["day-minmax", "switch", "imperial"],
      minMaxStrI
    );
    dayDiv.appendChild(minMaxI);

    const icon = makeElement("img", ["info-icon"], null, {
      src: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
    });
    dayDiv.appendChild(icon);

    container.appendChild(dayDiv);
  });

  return container;
};

export { weatherDaily };
