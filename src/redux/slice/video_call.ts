import Cookies from "js-cookie";

import { createSlice } from "@reduxjs/toolkit";
import { videoCallApi } from "../api/video_call";
import { TOKEN_TYPE } from "@/constants/variable";



type VideoCallState = {};

const initialState: VideoCallState = {};

const videoCallSlice = createSlice({
  name: "videoCallSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(videoCallApi.endpoints.createConnection.matchFulfilled, (_, { payload }) => {
      if(!payload.data?.uuid) return;
      Cookies.set(TOKEN_TYPE.UUID, payload.data.uuid);
    })
  }
})

export default videoCallSlice;