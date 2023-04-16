import { ActionTypes } from "../actions/ActionTypes";
const intialState = {
  profiles: [],
};

export const profileReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROFILES:
      return { ...state, profiles: payload };
    default:
      return state;
  }
};
