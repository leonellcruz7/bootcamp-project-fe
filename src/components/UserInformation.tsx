import React from "react";

export default function UserInformation() {
  return (
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
  );
}
