import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { videoCallApi } from "./api/video_call";



const middleware = [
  videoCallApi.middleware,
]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch