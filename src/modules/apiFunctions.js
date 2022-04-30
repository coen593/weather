const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5f5992cceef1e1c9dcdf0816fc3dbd5d`;
    const response = await fetch(url, {
        mode: "cors",
    });
    const weather = await response.json();
    return weather
};

const getCoordinates = async (loc) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=5f5992cceef1e1c9dcdf0816fc3dbd5d`;
    const response = await fetch(url, {
        mode: "cors",
    });
    const coord = await response.json();
    const { lat, lon } = coord[0];
    return { lat, lon };
};

const getWeatherAtLocation = async loc => {
    const { lat, lon } = await getCoordinates(loc)
    const weather = await getWeather(lat, lon)
    console.log(weather)
}

export { getWeatherAtLocation };
