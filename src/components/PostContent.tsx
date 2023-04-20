import React from "react";

export default function PostContent() {
  return (
    <a href="/view-post" className="button link">
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
    </a>
  );
}
