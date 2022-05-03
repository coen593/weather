import { fromUnixTime, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { makeElement, capitalizeFirstLetter, kToC, kToF } from "../utils";

const weatherInfo = (weather, address) => {
    const container = makeElement("div", ["weather-info"]);

    const description = makeElement(
        "h3",
        ["info-description"],
        capitalizeFirstLetter(weather.current.weather[0].description)
    );
    container.appendChild(description);

    const location = makeElement(
        "span",
        ["info-location"],
        `${address.city}, ${address.countryName}`
    );
    container.appendChild(location);

    const dt = utcToZonedTime(fromUnixTime(weather.current.dt), weather.timezone);
    const date = format(dt, "EEEE', 'do MMMM y");
    const time = format(dt, "h':'mm a");
    const dateSpan = makeElement("span", ["info-date"], date);
    const timeSpan = makeElement("span", ["info-time"], time);
    container.appendChild(dateSpan);
    container.appendChild(timeSpan);

    const tempC = makeElement(
        "h2",
        ["info-temp", "celsius"],
        `${Math.round(kToC(weather.current.temp))} &deg;C`
    );
    const tempF = makeElement(
        "h2",
        ["info-temp", "fahrenheit"],
        `${Math.round(kToF(weather.current.temp))} &deg;F`
    );
    container.appendChild(tempC);
    container.appendChild(tempF);

    const icon = makeElement('img',['info-icon'],null, {
        'src': `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`
    })
    container.appendChild(icon)

    return container;
};

export { weatherInfo };
