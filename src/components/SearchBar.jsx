import { useState } from "react";
import { fetchWeather } from "../api/weather";
import { fetchDescription } from "../api/gemini";

function SearchBar({ setWeatherData, setDescription, setErrorMsg }) {
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(location);
      const descriptionObject = await fetchDescription(location);
      setDescription(descriptionObject.description);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Invalid location. Please try again.");
      } else {
        setErrorMsg(
          "An error occurred while fetching the weather data. Please try again later.",
        );
      }
      setWeatherData(null);
    }
  };

  return (
    <>
      <section className="search-container">
        <input
          type="text"
          placeholder="Search location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </section>
    </>
  );
}

export default SearchBar;
