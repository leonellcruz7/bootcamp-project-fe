import Swal from "sweetalert2";
import { api } from "../api/api";
import { Post } from "../types/types";

export const getPosts = async ({ setPosts }: any) => {
  try {
    const response = await api.get("/api/v1/posts");
    // console.log(response.data);
    setPosts(response.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const getPostDetails = async (id: string, setInfo: any) => {
  try {
    const response = await api.get(`/api/v1/posts/${id}`);
    // console.log(response.data.included);
    setInfo(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (postid: string) => {
  try {
    const response = await api.delete(`api/v1/posts/${postid}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (
  post: Post,
  navigate: (path: string) => void
) => {
  try {
    const response = await api.post("/api/v1/posts", post);
    console.log(response);
    Swal.fire("Good Job!", "You have created a post!", "success");
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (
  postid: string,
  post: any,
  navigate: (path: string) => void
) => {
  try {
    const response = await api.put(`/api/v1/posts/${postid}`, post);
    console.log(response);
    Swal.fire("Good Job!", "You have created a post!", "success");
    navigate(`/view-post/${postid}`);
  } catch (err) {
    console.log(err);
  }
};

export const searchPost = async (post: string, setPosts: any) => {
  const body = {
    title: post,
  };
  try {
    const response = await api.post("/api/v1/posts/search", body);
    setPosts(response.data.data);
    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const upvote = async (current_user: string, postid: string) => {
  const body = {
    user_id: current_user,
  };
  try {
    const response = await api.post(`/api/v1/posts/upvote/${postid}`, body);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const downvote = async (current_user: string, postid: string) => {
  const body = {
    user_id: current_user,
  };
  try {
    const response = await api.post(`/api/v1/posts/downvote/${postid}`, body);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
