import React, { useEffect, useState } from "react";
import Navbar from "../components/assets/Navbar";
import TagsCard from "../components/feed/TagsCard";
import { searchPost } from "../actions/posts";
// import { useNavigate } from "react-router-dom";
import PostCard from "../components/feed/PostCard";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  //   const navigate = useNavigate();

  const [tag, setTag] = useState("");
  const [update, setUpdate] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [params] = useSearchParams();
  const post = params.get("post");

  useEffect(() => {
    searchPost(post!, setPosts);
  }, [post]);

  return (
    <div>
      <Navbar />
      <div className="body max-w-[840px]">
        <div className="flex gap-10">
          <div className="max-w-[560px]">
            <p className="text-sm font-medium">
              Search Result {post && `for ${post}`}
            </p>
            <div className="flex flex-col gap-3 mt-3 min-w-[560px]">
              {posts
                .filter((item) => {
                  if (tag) {
                    return item.attributes.tags.includes(tag);
                  } else {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <PostCard
                      key={index}
                      post={item}
                      update={update}
                      setUpdate={setUpdate}
                    />
                  );
                })
                .reverse()}
            </div>
            {posts.length === 0 && (
              <div className="bg-white p-4 rounded-[4px] h-[300px] flex flex-col justify-center items-center text-center">
                <p>{`Sorry! Post with title "${post}" does not exist.`}</p>
                <p>Try making another search</p>
              </div>
            )}
          </div>
          <div className="max-w-[240px] w-full">
            <p className="mb-3 font-medium">Popular Tags</p>
            <TagsCard tag={tag} setTag={setTag} />
          </div>
        </div>
      </div>
    </div>
  );
}
