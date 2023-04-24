import React, { FC, useEffect, useState } from "react";
import { CommentDetails } from "../types/types";
import Moment from "react-moment";
import Avatar from "boring-avatars";
import Reply from "./Reply";
import {
  addReply,
  downvoteComment,
  findComment,
  upvoteComment,
} from "../actions/comments";
import Textarea from "./assets/Textarea";
import { motion } from "framer-motion";
import Cookies from "universal-cookie";

const Comment: FC<CommentDetails> = ({ details, setUpdate }) => {
  const [data, setData] = useState<any>();
  const [commentUpdate, setCommentUpdate] = useState(false);
  const [onReply, setOnReply] = useState(false);
  const [reply, setReply] = useState("");
  const cookie = new Cookies();
  const current_user = cookie.get("username");
  const userid = cookie.get("user_id");
  // console.log(details);

  useEffect(() => {
    findComment(details.id, setData);
  }, [details.id, commentUpdate]);

  const handleSendReply = () => {
    const body = {
      message: reply,
      user: current_user,
      comment_id: details?.id,
    };
    setReply("");
    addReply({ body });
    setOnReply(false);
    setCommentUpdate((prev) => !prev);
  };

  const handleUpvote = () => {
    if (!details?.votes.includes(userid)) {
      upvoteComment(userid, details.id);
      setUpdate((prev: any) => !prev);
    }
  };

  const handleDownvote = () => {
    if (details?.votes.includes(userid)) {
      downvoteComment(userid, details.id);
      setUpdate((prev: any) => !prev);
    }
  };

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
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center gap-2 ml-1">
          <p>{details.username}</p>
          <p className="text-xs text-neutral400">
            <Moment fromNow>{details.updated_at}</Moment>
          </p>
        </div>
        <div className="">
          <p className="text-neutral400">{details.message}</p>
        </div>
        <div className=" flex items-center gap-3">
          <div className="vote-wrapper horizontal">
            <button
              onClick={handleUpvote}
              disabled={details?.votes.includes(userid)}
            >
              <i
                className={`icon ri-arrow-up-line ${
                  details?.votes.includes(userid) && "active"
                }`}
              ></i>{" "}
            </button>
            <p className="text-neutral800">{details?.votes.length}</p>
            <button
              onClick={handleDownvote}
              disabled={!details?.votes.includes(userid)}
            >
              <i className="icon ri-arrow-down-line"></i>
            </button>
          </div>
          <div>
            <button
              className="flex items-center gap-1"
              onClick={() => setOnReply((prev) => !prev)}
            >
              <i className="icon ri-chat-3-line"></i>
              <p>{data?.replies?.length} Replies</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 overflow-hidden">
          {onReply && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1, bounce: 0 }}
            >
              <Textarea
                height="320px"
                value={reply}
                placeholder="Write a reply"
                label=""
                error="test"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setReply(e.target.value)
                }
                showError={false}
              />
              <div className="flex justify-end my-2">
                <div className="w-fit">
                  <button
                    className="button primary-button small"
                    onClick={handleSendReply}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {data?.replies.map((item: any, index: string) => {
            return <Reply key={index} reply={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
