import { useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";

function Home() {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <>
            <SearchBar setWeatherData={setWeatherData}></SearchBar>
            {weatherData ? (
                <WeatherDisplay data={weatherData} />
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Home;