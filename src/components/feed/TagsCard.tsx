import React, { FC } from "react";

const TagsCard: FC<any> = ({ tag, setTag }) => {
  const tags = [
    "@design-talks",
    "@react",
    "@ruby",
    "@case-studies",
    "@tech-stack",
    "@bootcamp",
  ];
  const handleSelect = (item: string) => {
    item === tag ? setTag("") : setTag(item);
  };
  return (
    <ul className="tags-card">
      {tags.map((item, index) => {
        return (
          <button
            key={index}
            className={`tag-item ${tag === item && "selected"}`}
            onClick={handleSelect.bind(null, item)}
          >
            {item}
          </button>
        );
      })}
    </ul>
  );
};

export default TagsCard;
