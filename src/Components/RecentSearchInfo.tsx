import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import RecentSearchesList from "./RecentSearchesList";
import { useNavigate } from "react-router-dom";
import WeatherInfo from "./WeatherInfo";

const RecentSearchInfo = () => {
  const { recentSearchList } = useContext(SearchContext);
  const [recentWeatherInfo, setRecentWeatherInfo] = useState<any>();
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    setRecentWeatherInfo(e);
  };

  const renderRecentSearchList = () => {
    if (recentSearchList == "" || recentSearchList == null) {
      return <h2 className="text-white text-center font-bold p-4">No Recent Searches Found</h2>;
    }

    const startIndex = Math.max(recentSearchList.length - 5, 0);
    return recentSearchList
      ?.slice(startIndex)
      .map((e: any, i: number) => (
        <RecentSearchesList
          recentSearchList={e}
          key={i}
          handleClick={handleClick}
        />
      ));
  };

  const handleBackClick = () => {
    if (recentWeatherInfo) {
      setRecentWeatherInfo("");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="w-full lg:w-2/5 border border-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 rounded-xl bg-blue-400">
      <div>
        <h2 className="text-white font-bold text-xl text-center">
          Recent Searches
        </h2>
      </div>
      <button
        className="text-white border border-1 border-white rounded-3xl my-4 px-4 mb-4"
        onClick={handleBackClick}
      >
        Back
      </button>
      {recentWeatherInfo ? (
        <WeatherInfo weatherData={recentWeatherInfo} />
      ) : (
        renderRecentSearchList()
      )}
    </div>
  );
};

export default RecentSearchInfo;
