import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {
    title: "",
    body: "",
    user_id: "",
    tags: [],
  },
};

export const createPostSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setPost } = createPostSlice.actions;
export default createPostSlice.reducer;
