import { fromUnixTime, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { makeElement, kToC, kToF, round } from "../utils";

const weatherHourly= (weather) => {
  const container = makeElement("div", ["weather-daily"]);
  weather.hourly.forEach((hour) => {
    const hourDiv = makeElement("div", ["day-container"]);

    const dt = format(
      utcToZonedTime(fromUnixTime(hour.dt), weather.timezone), "h':'mm a");
    const date = makeElement("span", ["weather-day"], dt);
    hourDiv.appendChild(date);

    const tempM = makeElement(
      "span",
      ["day-temp", "switch", "metric"],
      `${round(kToC(hour.temp), 0)} &deg;C`
    );
    hourDiv.appendChild(tempM);
    const tempI = makeElement(
      "span",
      ["day-temp", "switch", "imperial"],
      `${round(kToF(hour.temp), 0)} &deg;F`
    );
    hourDiv.appendChild(tempI);

    const icon = makeElement("img", ["info-icon"], null, {
      src: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
    });
    hourDiv.appendChild(icon);

    container.appendChild(hourDiv);
  });

  return container;
};

export { weatherHourly };
