import React from "react";

type RecentSearchList = {
  recentSearchList: any;
  handleClick: (e:any) => void;
};

const RecentSearchesList = ({ recentSearchList , handleClick }: RecentSearchList) => {
  return (
    <div className="py-4">
        <div
          className="text-white p-4 border border-1 border-white rounded-xl font-bold cursor-pointer"
          onClick={() => handleClick(recentSearchList)}
        >
          {recentSearchList?.name}
        </div>
    </div>
  );
};

export default RecentSearchesList;
