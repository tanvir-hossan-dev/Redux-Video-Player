import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "./videosApi";

const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

const getVideos = createAsyncThunk("videos/getVideos", async () => {
  const videos = await getApi();
  return videos;
});

const vidoesSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.isError = false;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export { vidoesSlice, getVideos };
