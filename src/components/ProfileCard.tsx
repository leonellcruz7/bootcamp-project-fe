import React from "react";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-cover relative px-6">
        <div className="rounded-[50%] bg-neutral400 w-[72px] h-[72px] absolute bottom-[-35px] border-[4px] border-white"></div>
      </div>
      <div className="profile-details">
        <p className="profile-name">Kirby Borromeo</p>
        <button className="button primary-button">Create Post</button>
      </div>
    </div>
  );
}
