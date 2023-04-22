import React, { useEffect, useState } from "react";
import Navbar from "../components/assets/Navbar";
import ProfileCard from "../components/ProfileCard";
import PostCard from "../components/feed/PostCard";
import { useParams } from "react-router-dom";
import { getPosts } from "../actions/posts";
import { getProfile } from "../actions/profile";
import empty from "../assets/images/empty.svg";

export default function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState<any>();
  const [posts, setPosts] = useState<any[]>([]);
  const [update, setUpdate] = useState(false);
  const { username } = params;
  console.log(profile);

  useEffect(() => {
    getPosts({ setPosts });
    getProfile(username, setProfile);
  }, [update, username]);
  return (
    <div>
      <Navbar />
      <div className="body max-w-[920px]">
        <div className="flex gap-10">
          <div className="w-[560px]">
            <p className="text-md font-bold">Your Posts</p>
            <div className="flex flex-col gap-3 mt-3">
              {posts
                .filter((item) => {
                  if (item.attributes.user.username === username) {
                    return item;
                  } else {
                    return null;
                  }
                })
                .map((item: any, index: any) => {
                  return (
                    <PostCard
                      key={index}
                      post={item}
                      update={update}
                      setUpdate={setUpdate}
                    />
                  );
                })}
            </div>
            {profile?.attributes?.posts.length === 0 && (
              <div className="bg-white rounded-[4px] w-full h-[400px] flex flex-col gap-4 items-center justify-center">
                <img src={empty} className="h-[150px]" alt="" />
                <p>Uh oh! You haven’t posted anything.</p>
              </div>
            )}
          </div>
          <div className="max-w-[320px] w-full">
            <ProfileCard username={username!} />
          </div>
        </div>
      </div>
    </div>
  );
}
