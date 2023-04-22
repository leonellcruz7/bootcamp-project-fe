import React, { FC } from "react";
import { PostContentType } from "../types/types";
const PostContent: FC<PostContentType> = ({ content }) => {
  // console.log("content", content);

  return (
    <a href={`/view-post/${content?.id}`} className="button link">
      <div className="post-content mt-2">
        <p className="font-bold text-md truncate max-w-[400px]">
          {content?.title}{" "}
        </p>
        <div>
          <p className="font-light text-sm mb-1 break-words">{content?.body}</p>
          <div className="image-holder">
            {/* <img
              src="https://res.cloudinary.com/dyecs1c3j/image/upload/v1681873352/Frame_13_pya8f9.png"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostContent;
