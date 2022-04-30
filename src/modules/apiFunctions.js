const getWeather = async (lat, lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5f5992cceef1e1c9dcdf0816fc3dbd5d`;
        const response = await fetch(url, {
            mode: "cors",
        });
        const weather = await response.json();
        return weather;
    } catch (e) {
        console.log(e);
    }
    return null;
};

const getCoordinates = async (loc) => {
    try {
        const url = `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${loc}&apiKey=OTdkM2MzZTcyMGQ5NDMwMWI0YTVlYWU3Y2ZjMzQyNTk6NTIzOWQxNmEtZTE4OC00NzEwLTlhMzAtNTg5YTM3MmFmMGNl`
        const response = await fetch(url, {
            mode: "cors",
        });
        const coord = await response.json();
        if (!coord.locations.length) {
            throw new Error('Location not found');
        }
        const { latitude, longitude } = coord.locations[0].referencePosition;
        return { latitude, longitude };
    } catch (e) {
        console.log(e);
    }
    return null;
};

const getWeatherAtLocation = async (loc) => {
    try {
        const { latitude, longitude } = await getCoordinates(loc);
        const weather = await getWeather(latitude, longitude);
        console.log(weather);
    } catch (e) {
        console.log(e)
    }
    return null
};

export { getWeatherAtLocation };
