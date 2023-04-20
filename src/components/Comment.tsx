import React from "react";

export default function Comment() {
  return (
    <div className="flex gap-2 overflow-hidden">
      <div className="w-fit">
        <div className="w-6 h-6 rounded-[50%] bg-primary400"></div>
        <div className="divider vertical mx-auto"></div>
      </div>
      <div className="">
        <div className="flex items-center gap-2 ml-1">
          <p>Adrian Castueras</p>
          <p className="text-xs text-neutral400">6 hours ago</p>
        </div>
        <div className="mt-2">
          <p>This looks awesome! Thanks for this, Kirbs!</p>
        </div>
        <div className="mt-4 flex gap-3">
          <div className="vote-wrapper horizontal">
            <button>
              <i className="icon ri-arrow-up-line"></i>
            </button>
            <p className="text-neutral800">1.1K</p>
            <button>
              <i className="icon ri-arrow-down-line"></i>
            </button>
          </div>
          <div>
            <button className="flex items-center gap-1">
              <i className="icon ri-chat-3-line"></i>
              <p>2 Replies</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
