import { configureStore } from "@reduxjs/toolkit";
import { apiComment } from "../features/apiSlices/myCommentSlice";

export const store = configureStore({
  reducer: {
    [apiComment.reducerPath]: apiComment.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiComment.middleware,
  ]
});
