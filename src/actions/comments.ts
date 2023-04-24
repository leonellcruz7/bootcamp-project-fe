import { api } from "../api/api";
import { AddCommentTypes, ReplyBodyTypes } from "../types/types";

export const addComment = async (body: AddCommentTypes, setBtnLabel: any) => {
  console.log(body);
  try {
    const response = await api.post("/api/v1/comments", body);
    setBtnLabel("Comment");
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const findComment = async (commentid: string, setData: any) => {
  try {
    const response = await api.get(`/api/v1/comments/${commentid}`);
    // console.log(response);
    setData(response.data.data.attributes);
  } catch (err) {
    console.log(err);
  }
};

export const addReply = async ({ body }: ReplyBodyTypes) => {
  try {
    const response = await api.post("/api/v1/replies", body);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const upvoteComment = async (userid: string, id: string) => {
  const body = {
    user_id: userid,
  };
  try {
    const response = await api.post(`/api/v1/comments/upvote/${id}`, body);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const downvoteComment = async (userid: string, id: string) => {
  const body = {
    user_id: userid,
  };
  try {
    const response = await api.post(`/api/v1/comments/downvote/${id}`, body);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
