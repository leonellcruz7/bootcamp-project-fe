import React, { useEffect, useState } from "react";
import Navbar from "../components/assets/Navbar";
import UserInformation from "../components/UserInformation";
import PostContent from "../components/PostContent";
import Textarea from "../components/assets/Textarea";
import Comment from "../components/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostDetails } from "../actions/posts";
import { CommentsType } from "../types/types";
import Cookies from "universal-cookie";

export default function ViewPost() {
  const navigate = useNavigate();
  const [info, setInfo] = useState<any>();
  const params = useParams();
  const { postid }: any = params;
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");
  const post_owner = info?.data.attributes.user_id.toString();
  console.log(info);
  const comments: CommentsType[] = info?.data.attributes.comments;
  const [comment, setComment] = useState("");
  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    getPostDetails(postid, setInfo);
  }, [postid]);

  const handleDelete = () => {
    deletePost(info?.data.attributes.id);
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="body max-w-[640px]">
        <div className="bg-white w-full p-6 rounded-[4px]">
          <UserInformation info={info} />
          <PostContent content={info?.data.attributes} />
          <div className="my-4 flex justify-between">
            <div className="flex gap-4">
              <div className="vote-wrapper horizontal">
                <button>
                  <i className="icon ri-arrow-up-line"></i>
                </button>
                <p className="text-neutral800">{info?.data.attributes.votes}</p>
                <button>
                  <i className="icon ri-arrow-down-line"></i>
                </button>
              </div>
              <button className="flex gap-1">
                <i className="icon ri-chat-3-line"></i>
                <p>{comments?.length} Comments</p>
              </button>
              <button className="flex gap-1">
                <i className="icon ri-share-forward-line"></i>
                <p>Share</p>
              </button>
            </div>
            {current_user === post_owner && (
              <div className="flex gap-4">
                <button className="flex gap-1">
                  <i className="icon ri-pencil-fill"></i>
                  <p>Edit</p>
                </button>
                <button className="flex gap-1" onClick={handleDelete}>
                  <i className="icon ri-delete-bin-6-line"></i>
                  <p>Delete</p>
                </button>
              </div>
            )}
          </div>
          <Textarea
            height="h-[160px]"
            value={comment}
            placeholder="Write a comment..."
            label=""
            error="test"
            onChange={handleComment}
            showError={false}
          />
          <div className="flex justify-end mt-4">
            <button className="button primary-button fit">Comment</button>
          </div>
          <div className="divider horizontal"></div>
          <div className="flex flex-col gap-6">
            {comments?.map((item, index) => {
              return <Comment details={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
