import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  tags: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const search = state.search;
      const tags = state.tags.filter((tag) => tag !== action.payload);
      return {
        search,
        tags: tags || [],
      };
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filtersSlice;

export const { tagSelected, tagRemoved, searched } = filtersSlice.actions;
