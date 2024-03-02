import React, { createContext } from "react";
import { actions, initialState, reducer } from "../store/reducer";

export const SearchContext = createContext<any>(null);

export const Provider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    recentSearchList: state.recentSearchList,
    addTodoItem: (weatherInfo: any) => {
      dispatch({ type: actions.ADD_RECENT_SEARCHES, payload: weatherInfo });
    },
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};