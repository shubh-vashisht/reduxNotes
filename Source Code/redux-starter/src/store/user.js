let lastID = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push({
        id: ++lastID,
        name: action.payload.name,
      });
    },
    userRemoved: (state, action) => {
      state.filter((ell) => ell.id !== action.payload.id);
    },
  },
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;
