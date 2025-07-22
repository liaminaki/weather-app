import axios from "axios";

export async function fetchWeather(location) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const response = await axios.get(url);
    return response.data;
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}
