import React, { FC, useEffect, useState } from "react";
import { handleNavigate } from "../../actions/actions";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import UserInformation from "../UserInformation";
import PostContent from "../PostContent";
import { PostTypes } from "../../types/types";
import {
  deletePost,
  downvote,
  getPostDetails,
  sharePost,
  upvote,
} from "../../actions/posts";
import Cookies from "universal-cookie";

const PostCard: FC<PostTypes> = ({ post, update, setUpdate }) => {
  const [info, setInfo] = useState<any>();
  // console.log("post", post.attributes);
  // console.log("info", info?.data.attributes.votes);
  const [infoUpdate, setInfoUpdate] = useState(false);
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");
  const votes = info?.data.attributes.votes;
  const post_owner = post.attributes.user_id.toString();
  useEffect(() => {
    getPostDetails(post.id, setInfo);
  }, [post.id, infoUpdate]);

  const handleDelete = () => {
    deletePost(post.id);
    setUpdate(() => !update);
  };

  const handleUpvote = () => {
    if (!votes?.includes(current_user)) {
      upvote(current_user, post.id);
      setInfoUpdate((prev) => !prev);
    }
  };

  const handleDownvote = () => {
    if (votes?.includes(current_user)) {
      downvote(current_user, post.id);
      setInfoUpdate((prev) => !prev);
    }
  };

  const handleShare = () => {
    const body = {
      title: post.attributes.title,
      body: post.attributes.body,
      tags: post.attributes.tags,
      user_id: current_user,
    };
    setUpdate((prev: boolean) => !prev);
    sharePost(body, navigate);
  };

  const navigate = useNavigate();
  return (
    <div className="postcard-container">
      <div className="actions-container">
        <div className="vote-wrapper">
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
        <div className="control-wrapper">
          <button
            onClick={() => handleNavigate(navigate, `/view-post/${post.id}`)}
          >
            <i className="icon ri-chat-3-line"></i>
          </button>
          <button onClick={handleShare}>
            <i className="icon ri-share-forward-line"></i>
          </button>
          {post_owner === current_user && (
            <>
              <button
                onClick={() =>
                  handleNavigate(navigate, `/edit-post/${post.id}`)
                }
              >
                <i className="icon ri-pencil-fill"></i>
              </button>
              <button onClick={handleDelete}>
                <i className="icon ri-delete-bin-6-line"></i>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="content-wrapper">
        <UserInformation info={info} />
        <PostContent content={post.attributes} />
      </div>
    </div>
  );
};

export default PostCard;
