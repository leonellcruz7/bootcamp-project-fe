import React, { FC } from "react";
import { OptionTypes } from "../types/types";

const Options: FC<OptionTypes> = ({ options }) => {
  return (
    <div className="option-list">
      {options.map((item, index) => {
        return (
          <a href="/test" target="_blank" key={index} className="list-item">
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default Options;
