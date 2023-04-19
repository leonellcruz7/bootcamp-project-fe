import React from "react";
import Navbar from "../components/assets/Navbar";
import Trending from "../components/feed/Trending";
import PostCard from "../components/feed/PostCard";
import TagsCard from "../components/feed/TagsCard";
import Options from "../components/feed/Options";

export default function Feed() {
  const terms = [
    "User Agreement",
    "Privacy Policy",
    "Content Policy",
    "Moderator Code of Conduct",
  ];

  const languages = [
    "English",
    "Deutsch",
    "Français",
    "Español",
    "Italiano",
    "Português",
  ];
  return (
    <div>
      <Navbar />
      <div className="body max-w-[840px]">
        <Trending />
        <div className="divider horizontal"></div>
        <div className="flex gap-10">
          <div className="max-w-[560px]">
            <p className="text-sm font-medium">Recent posts from @react</p>
            <div className="flex flex-col gap-3 mt-3">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
          <div className="max-w-[240px] w-full">
            <button className="button primary-button">Create Post</button>
            <div className="divider horizontal"></div>
            <TagsCard />
            <div className="mt-4">
              <Options options={terms} />
              <div className="divider horizontal"></div>
              <Options options={languages} />
              <div className="divider horizontal"></div>
              <div className="footer-wrapper">
                <p className="footer-text">Mashup Garage Blogs © 2023</p>
                <p className="footer-text">All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
