import { configureStore } from "@reduxjs/toolkit";
import createPostReducer from "./posts/create-post";

export const store = configureStore({
  reducer: {
    createPost: createPostReducer,
  },
});
