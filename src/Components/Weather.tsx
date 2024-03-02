import React, { useContext, useState } from "react";
import InputText from "./InputText";
import axios from "axios";
import { api } from "../api/api";
import WeatherInfo from "./WeatherInfo";
import WeatherTools from "./WeatherTools";
import { SearchContext } from "../context/SearchContext";
import ErrorText from "./ErrorText";
import LoadingText from "./LoadingText";

const Weather = () => {
  const [city, setCity] = useState<string>("");
  const [weatherInfo, setWeatherInfo] = useState();
  const [isCelsius, setIsCelsius] = useState<boolean>(false);
  const { addTodoItem } = useContext(SearchContext);
  const [erros, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrors("");
    setLoading(true);
    try {
      const response = await axios.get(
        `${api.BASE_URL}weather?q=${city.toLocaleLowerCase()}&APPID=${
          api.API_KEY
        }`
      );
      setWeatherInfo(response.data);
      addTodoItem({
        temp: response.data.main.temp,
        city: response.data.name,
        wind: response.data.wind?.speed,
        description: response.data.weather[0].description,
      });
      setCity("");
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.log(err.response.data.message);
      setErrors(err.response.data.message);
    }
  };

  return (
    <div className="w-full lg:w-2/5 border border-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 rounded-xl bg-blue-400">
      <WeatherTools isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      <InputText city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {loading && <LoadingText />}
      <ErrorText error={erros} />
      {weatherInfo && !erros && !loading && (
        <WeatherInfo weatherData={weatherInfo} isCelsius={isCelsius} />
      )}
    </div>
  );
};

export default Weather;
