import React, { FC } from "react";
import { PostContentType } from "../types/types";
const PostContent: FC<PostContentType> = ({ content }) => {
  // console.log("content", content);

  return (
    <div className="post-content mt-2">
      <p className="font-bold text-md truncate max-w-[400px]">
        {content?.title}
      </p>
      <div>
        <div className="overflow-y-scroll max-h-[190px] my-1 pr-5">
          <p
            className="ck ck-content font-light text-sm mb-1 break-words"
            dangerouslySetInnerHTML={{ __html: content?.body }}
          ></p>
        </div>
        <div className="image-holder">
          {/* <img
              src="https://res.cloudinary.com/dyecs1c3j/image/upload/v1681873352/Frame_13_pya8f9.png"
              alt=""
            /> */}
        </div>
      </div>
    </div>
  );
};

export default PostContent;
