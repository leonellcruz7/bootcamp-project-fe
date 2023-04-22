import React, { useEffect, useState } from "react";
import Input from "./assets/Input";
import Textarea from "./assets/Textarea";
import Tags from "./Tags";
import { useDispatch } from "react-redux";
import { setPost } from "../redux/posts/create-post";
import Cookies from "universal-cookie";

export default function CreatePostCard() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");
  const tags = [
    "@react",
    "@ruby",
    "@tech-stack",
    "@case-studies",
    "@bootcamp",
    "@design-talks",
  ];
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleTags = (item: string) => {
    !selectedTags.includes(item)
      ? setSelectedTags((prev) => [...prev, item])
      : setSelectedTags((prev) => prev.filter((tag) => tag !== item));
  };

  useEffect(() => {
    dispatch(
      setPost({
        title: title,
        body: body,
        tags: selectedTags,
        user_id: current_user,
      })
    );
  }, [title, body, selectedTags, current_user, dispatch]);
  return (
    <div className="create-card">
      <div className="form-wrapper">
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
          height="h-[320px]"
          value={body}
          placeholder=""
          label="Body"
          error="test"
          onChange={handleBody}
          showError={false}
        />
        <div>
          <p>Tags</p>
          <div className="tags-wrapper">
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
