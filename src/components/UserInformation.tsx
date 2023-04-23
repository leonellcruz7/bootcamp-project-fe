import React, { FC } from "react";
import Moment from "react-moment";
import { UserInfoTypes } from "../types/types";

const UserInformation: FC<UserInfoTypes> = ({ info }) => {
  // console.log("info", info);
  const tags: string[] = info?.data.attributes.tags;
  const username = info?.data.attributes.user.username;
  return (
    <div className="w-full">
      <div className="user-information">
        <div className="flex gap-2 items-center cursor-pointer">
          <div className="w-5 h-5 rounded-[50%] bg-neutral500"></div>
          <a
            href={`/profile/${username}`}
            className="text-sm text-neutral800 no-underline"
          >
            {username}
          </a>
        </div>
        <p className="text-xs text-neutral400">
          <i className="ri-time-line mr-1"></i>
          <Moment fromNow>{info?.data.attributes.updated_at}</Moment>
        </p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {tags?.map((item, index) => {
          return (
            <p key={index} className="text-xs text-neutral400 mt-1">
              {item}
            </p>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default UserInformation;
