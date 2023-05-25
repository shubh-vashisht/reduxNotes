import { createSlice } from "@reduxjs/toolkit";

let lastID = 0;
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        name: action.payload.name,
        id: ++lastID,
      });
    },
    projectRemoved: (state, action) => {
      state.filter((ell) => ell.id !== action.payload.id);
    },
  },
});

export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;
