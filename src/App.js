import React, { useState } from "react";
import WeatherComponent from "./components/WeatherComponent";
import City from "./components/City";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState("rainy");
  return (
    <div className="App">
      <WeatherComponent city={city} weather={weather} />
      <City setWeather={setWeather} setCity={setCity} />
    </div>
  );
}

export default App;
