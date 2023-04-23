import { api } from "../api/api";
import { AddCommentTypes } from "../types/types";

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
