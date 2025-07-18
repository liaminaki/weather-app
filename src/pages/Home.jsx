import { useState } from "react";
import SearchBar from "../components/Searchbar";
import WeatherDisplay from "../components/WeatherDisplay";


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