import { ActionTypes } from "./ActionTypes";

export const setProfiles = (profiles) => {
  return {
    type: ActionTypes.SET_PROFILES,
    payload: profiles,
  };
};
