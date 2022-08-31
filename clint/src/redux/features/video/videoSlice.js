import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "./videoApi";

const initialState = {
  isLoading: false,
  video: {},
  isError: false,
  error: "",
};

const getVideo = createAsyncThunk("video/getVideo", async (id) => {
  const video = await getApi(id);
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
        state.isError = false;
      })
      .addCase(getVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export { videoSlice, getVideo };
