import { configureStore } from "@reduxjs/toolkit";
import { reletedVideosSlice } from "../features/reletedVideos/reletedVideosSlice";
import { tagsSlice } from "../features/tags/tagsSlice";
import { videoSlice } from "../features/video/videoSlice";
import { vidoesSlice } from "../features/videos/videosSlice";

const store = configureStore({
  reducer: {
    vidoes: vidoesSlice.reducer,
    tags: tagsSlice.reducer,
    video: videoSlice.reducer,
    reletedVideos: reletedVideosSlice.reducer,
  },
});

export default store;
