export const initialState = {
  recentSearchList: [],
};

export const actions = {
  ADD_RECENT_SEARCHES: "ADD_RECENT_SEARCHES",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.ADD_RECENT_SEARCHES:
      return {
        recentSearchList: [
          ...state.recentSearchList,
          {
            main: {
                temp: action.payload.temp
            },
            name: action.payload.city,
            weather: [
                {
                    description: action.payload.description
                }
            ],
            wind: {
              speed: action.payload.wind
            }
          },
        ],
      };
    default:
      return state;
  }
};
