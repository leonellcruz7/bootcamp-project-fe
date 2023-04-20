import React from "react";
import { handleNavigate } from "../../actions/actions";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import UserInformation from "../UserInformation";
import PostContent from "../PostContent";

export default function PostCard() {
  const navigate = useNavigate();
  return (
    <div className="postcard-container">
      <div className="actions-container">
        <div className="vote-wrapper">
          <button>
            <i className="icon ri-arrow-up-line"></i>
          </button>
          <p className="text-neutral800">1.1K</p>
          <button>
            <i className="icon ri-arrow-down-line"></i>
          </button>
        </div>
        <div className="control-wrapper">
          <button>
            <i className="icon ri-chat-3-line"></i>
          </button>
          <button>
            <i className="icon ri-share-forward-line"></i>
          </button>
          <button onClick={() => handleNavigate(navigate, "/edit-post")}>
            <i className="icon ri-pencil-fill"></i>
          </button>
          <button>
            <i className="icon ri-delete-bin-6-line"></i>
          </button>
        </div>
      </div>
      <div className="content-wrapper">
        <UserInformation />
        <PostContent />
      </div>
    </div>
  );
}
