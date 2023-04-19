import React, { useEffect, useState } from "react";
import Input from "./assets/Input";
import Textarea from "./assets/Textarea";
import Tags from "./Tags";

export default function CreatePostCard() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = [
    "@react",
    "@ruby",
    "@tech-stack",
    "@case-studies",
    "@bootcamo",
    "@design-talks",
  ];
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };
  useEffect(() => {
    console.log(selectedTags);
  }, [selectedTags]);
  const handleTags = (item: string) => {
    !selectedTags.includes(item)
      ? setSelectedTags((prev) => [...prev, item])
      : setSelectedTags((prev) => prev.filter((tag) => tag !== item));
  };
  return (
    <div className="w-[640px] bg-white rounded-[4px] p-6">
      <div className="flex flex-col gap-6">
        <Input
          value={title}
          placeholder=""
          label="Title"
          error="test"
          type="text"
          onChange={handleTitle}
          showError={false}
        />{" "}
        <Textarea
          value={body}
          placeholder=""
          label="Body"
          error="test"
          onChange={handleBody}
          showError={false}
        />
        <div>
          <p>Tags</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((item, index) => {
              return (
                <Tags
                  key={index}
                  label={item}
                  active={selectedTags.includes(item)}
                  onClick={handleTags.bind(null, item)}
                />
              );
            })}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}