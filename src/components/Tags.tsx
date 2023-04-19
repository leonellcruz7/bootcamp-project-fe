import React, { FC } from "react";
import { TagsTypes } from "../types/types";

const Tags: FC<TagsTypes> = ({ label, active, onClick }) => {
  return (
    <button className={`tags-button ${active && "active"}`} onClick={onClick}>
      {active ? (
        <i className="ri-add-line"></i>
      ) : (
        <i className="ri-subtract-line"></i>
      )}
      <p>{label}</p>
    </button>
  );
};

export default Tags;
