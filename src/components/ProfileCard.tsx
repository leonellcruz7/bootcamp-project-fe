import React, { FC } from "react";
import { handleNavigate } from "../actions/actions";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { Username } from "../types/types";

const ProfileCard: FC<Username> = ({ username }) => {
  const navigate = useNavigate();
  return (
    <div className="profile-card">
      <div className="profile-cover relative px-6">
        <div className="rounded-[50%] bg-neutral400 w-[72px] h-[72px] absolute bottom-[-35px] border-[4px] border-white"></div>
      </div>
      <div className="profile-details">
        <p className="profile-name">{username}</p>
        <button
          className="button primary-button"
          onClick={() => handleNavigate(navigate, "/create-post")}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
