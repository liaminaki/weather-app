import { useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      <SearchBar
        setWeatherData={setWeatherData}
        setDescription={setDescription}
        setErrorMsg={setErrorMsg}
      ></SearchBar>
      {weatherData ? (
        <WeatherDisplay data={weatherData} description={description} />
      ) : errorMsg ? (
        <h2 className="error-message">{errorMsg}</h2>
      ) : (
        <h1>Weather App</h1>
      )}
    </>
  );
}

export default Home;
