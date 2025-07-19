import { useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";

function Home() {
    const [weatherData, setWeatherData] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <>
            <SearchBar setWeatherData={setWeatherData} setErrorMsg={setErrorMsg}></SearchBar>
            {weatherData ? (
                <WeatherDisplay data={weatherData} />
            ) : (
                errorMsg ? (
                    <h2 className='error-message'>{errorMsg}</h2>
                ) : (
                <h1>Weather App</h1>
                )
            )}
        </>
    )
}

export default Home;