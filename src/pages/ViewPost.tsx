import React, { useEffect, useState } from "react";
import Navbar from "../components/assets/Navbar";
import UserInformation from "../components/UserInformation";
import PostContent from "../components/PostContent";
import Textarea from "../components/assets/Textarea";
import Comment from "../components/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, downvote, getPostDetails, upvote } from "../actions/posts";
import { CommentsType } from "../types/types";
import Cookies from "universal-cookie";
import { addComment } from "../actions/comments";
import Loader from "../components/assets/Loader";

export default function ViewPost() {
  const navigate = useNavigate();
  const [btnLabel, setBtnLabel] = useState<any>("Comment");
  const [info, setInfo] = useState<any>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [update, setUpdate] = useState(false);
  const params = useParams();
  const { postid }: any = params;
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");
  const username = cookie.get("username");
  const post_owner = info?.data.attributes.user_id.toString();
  // console.log(info);
  const comments: CommentsType[] = info?.data.attributes.comments;
  const [comment, setComment] = useState("");
  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const votes = info?.data.attributes.votes;
  const handleDelete = () => {
    deletePost(info?.data.attributes.id);
    navigate("/");
  };

  useEffect(() => {
    comment ? setIsDisabled(false) : setIsDisabled(true);
  }, [comment]);

  const handleAddComment = () => {
    const body = {
      post_id: postid,
      message: comment,
      username: username,
    };
    setBtnLabel(<Loader />);
    addComment(body, setBtnLabel);
    setUpdate(!update);
    setComment("");
  };
  useEffect(() => {
    getPostDetails(postid, setInfo);
  }, [postid, update]);

  const handleUpvote = () => {
    if (!votes?.includes(current_user)) {
      upvote(current_user, postid);
      setUpdate((prev) => !prev);
    }
  };

  const handleDownvote = () => {
    if (votes?.includes(current_user)) {
      downvote(current_user, postid);
      setUpdate((prev) => !prev);
    }
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
                <button
                  onClick={handleUpvote}
                  disabled={votes?.includes(current_user)}
                >
                  <i
                    className={`icon ri-arrow-up-line ${
                      votes?.includes(current_user) && "active"
                    }`}
                  ></i>
                </button>
                <p className="text-neutral800">{votes?.length}</p>
                <button
                  onClick={handleDownvote}
                  disabled={!votes?.includes(current_user)}
                >
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
            <button
              className="button primary-button fit"
              onClick={handleAddComment}
              disabled={isDisabled}
            >
              {btnLabel}
            </button>
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
