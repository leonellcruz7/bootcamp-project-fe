import { api } from "../api/api";

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
