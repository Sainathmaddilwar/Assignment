import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "allProfiles",
  initialState: {
    profiles: [],
  },
  reducers: {
    setProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    deleteProfile: (state, action) => {
      const filteredData = state.profiles.filter(
        (element) => action.payload !== element.id
      );
      state.profiles = filteredData;
    },
    editProfile: (state, action) => {
      const newState = state.profiles.map((obj) => {
        const { name, email, phone, website } = action.payload.values;
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            name: name,
            email: email,
            phone: phone,
            website: website,
          };
        }
        return obj;
      });
      state.profiles = newState;
      // console.log(newState);
    },
  },
});

export default profileSlice.reducer;
export const { setProfiles, deleteProfile, editProfile } = profileSlice.actions;
