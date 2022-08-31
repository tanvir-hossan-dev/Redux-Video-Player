import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReletedVideosApi } from "./reletedVideosApi";

const initialState = {
  isLoading: false,
  reletedVideos: [],
  isError: false,
  error: "",
};

const getReletedVideos = createAsyncThunk(
  "reletedVideos/getReletedVideos",
  async (id, tags) => {
    const reletedVideos = await getReletedVideosApi(id, tags);
    return reletedVideos;
  }
);

const reletedVideosSlice = createSlice({
  name: "reletedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReletedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getReletedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reletedVideos = action.payload;
        state.isError = false;
      })
      .addCase(getReletedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.reletedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export { reletedVideosSlice, getReletedVideos };
