import React from "react";
import Navbar from "../components/assets/Navbar";
import CreatePostCard from "../components/CreatePostCard";

export default function CreatePost() {
  return (
    <div>
      <Navbar />
      <div className="body max-w-[640px]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Create Post</p>
          <div className="flex items-center gap-3">
            <a href="/draft" className="no-underline">
              Draft
            </a>
            <span className="bg-primary800 text-white py-1 px-2 text-xs rounded-[4px]">
              12
            </span>
          </div>
        </div>
        <div className="mt-6">
          <CreatePostCard />
        </div>
        <div className="flex p-4 justify-end gap-2">
          <button className="button secondary-button fit">Save as Draft</button>
          <button className="button primary-button fit">Post</button>
        </div>
      </div>
    </div>
  );
}
