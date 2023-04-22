import React from "react";
import Navbar from "../components/assets/Navbar";
// import PostCard from "../components/feed/PostCard";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="body max-w-[920px]">
        <div className="flex gap-10">
          <div className="max-w-[560px]">
            <p className="text-md font-bold">Your Posts</p>
            <div className="flex flex-col gap-3 mt-3">
              {/* <PostCard />
              <PostCard />
              <PostCard /> */}
            </div>
          </div>
          <div className="max-w-[320px] w-full">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
