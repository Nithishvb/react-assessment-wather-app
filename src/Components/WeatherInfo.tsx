import React from "react";
import {
  celsiusToFahrenheit,
  kelvinToCelsius,
} from "../utils/convertToCelsius";

type WeatherInofProps = {
  weatherData: any;
  isCelsius?: boolean;
};

const WeatherInfo = ({ weatherData, isCelsius }: WeatherInofProps) => {
  return (
    <div className="text-center py-10">
      <div>
        <h2 className="text-4xl text-white font-bold">
          {isCelsius
            ? celsiusToFahrenheit(kelvinToCelsius(weatherData?.main?.temp)) +
              "°F"
            : kelvinToCelsius(weatherData?.main?.temp) + "°C"}
        </h2>
        <p className="text-white py-2 font-semibold text-2xl">
          {weatherData?.name}
        </p>
      </div>
      <div className="flex justify-around flex-col lg:flex-row lg:gap-0 gap-4 items-center py-10">
        <div>
          <h2 className="text-2xl text-white font-semibold">
            {weatherData?.weather[0].description}
          </h2>
          <p className="text-white font-normal text-md">Weather</p>
        </div>
        <div>
          <h2 className="text-2xl text-white font-semibold">
            {weatherData?.wind?.speed} km/h
          </h2>
          <p className="text-white font-normal text-md">Wind speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
