import React, { FC } from "react";
import { CommentDetails } from "../types/types";
import Moment from "react-moment";
import Avatar from "boring-avatars";

const Comment: FC<CommentDetails> = ({ details }) => {
  // console.log(details);

  return (
    <div className="flex gap-2 overflow-hidden">
      <div className="w-fit">
        <div className="w-6 h-6 rounded-[50%] bg-primary400 overflow-hidden">
          {" "}
          <Avatar
            size={"auto"}
            name={details.username}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        <div className="divider vertical mx-auto"></div>
      </div>
      <div className="">
        <div className="flex items-center gap-2 ml-1">
          <p>{details.username}</p>
          <p className="text-xs text-neutral400">
            <Moment fromNow>{details.updated_at}</Moment>
          </p>
        </div>
        <div className="mt-2">
          <p>{details.message}</p>
        </div>
        <div className="mt-4 flex gap-3">
          <div className="vote-wrapper horizontal">
            <button>
              <i className="icon ri-arrow-up-line"></i>
            </button>
            <p className="text-neutral800">{details.votes}</p>
            <button>
              <i className="icon ri-arrow-down-line"></i>
            </button>
          </div>
          <div>
            <button className="flex items-center gap-1">
              <i className="icon ri-chat-3-line"></i>
              <p>0 Replies</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
