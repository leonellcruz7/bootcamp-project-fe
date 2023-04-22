import React, { FC, useEffect, useState } from "react";
import { handleNavigate } from "../../actions/actions";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import UserInformation from "../UserInformation";
import PostContent from "../PostContent";
import { PostTypes } from "../../types/types";
import { deletePost, getPostDetails } from "../../actions/posts";
import Cookies from "universal-cookie";

const PostCard: FC<PostTypes> = ({ post, update, setUpdate }) => {
  const [info, setInfo] = useState<any>();
  // console.log("post", post.attributes.user_id);
  // console.log("info", info);
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");

  const post_owner = post.attributes.user_id.toString();
  useEffect(() => {
    getPostDetails(post.id, setInfo);
  }, [post.id]);

  const handleDelete = () => {
    deletePost(post.id);
    setUpdate(!update);
  };

  const navigate = useNavigate();
  return (
    <div className="postcard-container">
      <div className="actions-container">
        <div className="vote-wrapper">
          <button>
            <i className="icon ri-arrow-up-line"></i>
          </button>
          <p className="text-neutral800">{post.attributes.votes}</p>
          <button>
            <i className="icon ri-arrow-down-line"></i>
          </button>
        </div>
        <div className="control-wrapper">
          <button
            onClick={() => handleNavigate(navigate, `/view-post/${post.id}`)}
          >
            <i className="icon ri-chat-3-line"></i>
          </button>
          <button>
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
