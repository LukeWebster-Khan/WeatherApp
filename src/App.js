import React, { useState } from "react";
import WeatherComponent from "./components/WeatherComponent";
import Axios from "axios";
import City from "./components/City";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState("rainy");
  const fetchWeather = async (city) => {
    city.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    setWeather(response.data.weather[0].main);
  };
  return (
    <div className="App">
      <WeatherComponent city={city} weather={weather} />
      <City setWeather={setWeather} fetchWeather={fetchWeather} />
    </div>
  );
}

export default App;
