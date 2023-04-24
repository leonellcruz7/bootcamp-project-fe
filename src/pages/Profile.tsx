import React, { useEffect, useState } from "react";
import Navbar from "../components/assets/Navbar";
import ProfileCard from "../components/ProfileCard";
import PostCard from "../components/feed/PostCard";
import { useParams } from "react-router-dom";
import { getPosts } from "../actions/posts";
import { getProfile } from "../actions/profile";
import empty from "../assets/images/empty.svg";
import Cookies from "universal-cookie";
import PostCardLoading from "../components/LoadingCards/PostCardLoading";

export default function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState<any>();
  const [posts, setPosts] = useState<any[]>([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const { username } = params;
  const cookie = new Cookies();
  const current_user = cookie.get("username");
  // console.log(profile);

  useEffect(() => {
    getPosts({ setPosts, setLoading });
    getProfile(username, setProfile);
  }, [update, username]);
  return (
    <div>
      <Navbar />
      <div className="body max-w-[920px]">
        <div className="flex gap-10">
          <div className="w-[560px]">
            <p className="text-md font-bold">
              {current_user === username ? "Your Posts" : `${username}'s posts`}
            </p>
            <div className="flex flex-col gap-3 mt-3">
              {!loading ? (
                posts
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
                  })
              ) : (
                <>
                  <PostCardLoading />
                  <PostCardLoading />
                </>
              )}
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
