import React, { FC } from "react";
// import { CommentDetails } from "../types/types";
import Moment from "react-moment";
import Avatar from "boring-avatars";
import { ReplyTypes } from "../types/types";

const Reply: FC<ReplyTypes> = ({ reply }) => {
  return (
    <div className="flex gap-2 overflow-hidden">
      <div className="w-fit">
        <div className="w-6 h-6 rounded-[50%] bg-primary400 overflow-hidden">
          {" "}
          <Avatar
            size={"auto"}
            name={reply?.user}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        <div className="divider vertical mx-auto"></div>
      </div>
      <div className="">
        <div className="flex items-center gap-2 ml-1">
          <p>{reply?.user}</p>
          <p className="text-xs text-neutral400">
            <Moment fromNow>{reply?.updated_at}</Moment>
          </p>
        </div>
        <div className="mt-2">
          <p className="text-neutral400">{reply?.message}</p>
        </div>
        <div className="mt-4 flex gap-3">
          <div className="vote-wrapper horizontal">
            <button>
              <i className="icon ri-arrow-up-line"></i>
            </button>
            <p className="text-neutral800">{reply?.votes.length}</p>
            <button>
              <i className="icon ri-arrow-down-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
