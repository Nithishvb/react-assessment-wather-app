import React from "react";
import { Link } from "react-router-dom";

type WeatherToolsProps = {
  isCelsius: boolean;
  setIsCelsius: (e: any) => void;
};

const WeatherTools = ({ isCelsius, setIsCelsius }: WeatherToolsProps) => {
  return (
    <div className="flex justify-between items-center py-2 pb-6">
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            onChange={() => setIsCelsius(!isCelsius)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div>
        <Link to={"/recentsearch"}>
          <button className="bg-white borde rounded-lg px-4 py-2 text-black">
            Recent Searches
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WeatherTools;
