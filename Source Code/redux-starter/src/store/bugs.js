import { createSlice, createSelector } from "@reduxjs/toolkit";

let lastID = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        description: action.payload.description,
        resolved: false,
        id: ++lastID,
        assignedTo: action.payload.employee,
      });
    },
    bugRemoved: (state, action) => {
      state.filter((ell) => ell.id !== action.payload.id);
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;

// we can use this or we can use:
// const memo = {};
// export const getUnresolvedBugs = (state) => {
//   const key = JSON.stringify(state);
//   if (key in memo) return memo[key];
//   memo[key] = state.entities.bugs.filter((bug) => !bug.resolved);
//   return memo[key];
// };

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsForEmployee = (employee) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => {
      console.log("bugs: ", bugs, " employee: ", employee);
      return bugs.filter((bug) => bug.assignedTo === employee);
    }
  );
