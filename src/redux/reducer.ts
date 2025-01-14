import videoCallSlice from "./slice/video_call";
import { combineReducers } from "@reduxjs/toolkit";
import { videoCallApi } from "./api/video_call";

export const rootReducer = combineReducers({
  videoCallReducer: videoCallSlice.reducer,
  [videoCallApi.reducerPath]: videoCallApi.reducer,
})