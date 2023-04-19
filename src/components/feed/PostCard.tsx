import React from "react";

export default function PostCard() {
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
          <button>
            <i className="icon ri-pencil-fill"></i>
          </button>
          <button>
            <i className="icon ri-delete-bin-6-line"></i>
          </button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="w-full">
          <div className="user-information">
            <div className="flex gap-2 items-center cursor-pointer">
              <div className="w-5 h-5 rounded-[50%] bg-neutral500"></div>
              <p className="text-sm">Kirby Borromeo</p>
            </div>
            <p className="text-xs text-neutral400">
              <i className="ri-time-line mr-1"></i>6 hours ago
            </p>
          </div>
          <p className="text-xs text-neutral400 mt-1">@bootcamp</p>
        </div>
        <div className="post-content mt-2">
          <p className="font-bold text-md">
            First UI/UX Session in MG Bootcamp 2023
          </p>
          <div className="image-holder">
            <img
              src="https://res.cloudinary.com/dyecs1c3j/image/upload/v1681873352/Frame_13_pya8f9.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
