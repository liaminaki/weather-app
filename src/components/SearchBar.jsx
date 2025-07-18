import axios from "axios";
import { useState } from "react";

function SearchBar({ setWeatherData }) {
  const [location, setLocation] = useState('Cebu');

  const handleSearch = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        console.log(response.data);
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
    }
  }

  return (
    <>
        <section className='search-container'>
            <input
            type='text'
            placeholder='Search location'
            value={location}
            onChange={e => setLocation(e.target.value)}
            >
            </input>
            <button
                onClick={handleSearch}
            >
                Search
            </button>
        </section>
    </>
  )
}

export default SearchBar;