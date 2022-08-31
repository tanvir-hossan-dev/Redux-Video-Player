import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getApi from "./tagApi";

const initialState = {
  isLoading: false,
  tags: [],
  isError: false,
  error: "",
};

const getTags = createAsyncThunk("tags/getTags", async () => {
  const tags = await getApi();
  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.tags = [];
      });
  },
});

export { tagsSlice, getTags };
