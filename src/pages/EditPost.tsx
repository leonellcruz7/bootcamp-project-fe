import React, { useState } from "react";
import CreatePostCard from "../components/CreatePostCard";
import Navbar from "../components/assets/Navbar";
import { updatePost } from "../actions/posts";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../components/assets/Loader";

export default function EditPost() {
  const params = useParams();
  const [btnLabel, setBtnLabel] = useState<any>("Update");
  const navigate = useNavigate();
  const { post } = useSelector((state: any) => state.createPost);
  const { postid } = params;
  const handleUpdate = () => {
    if (!post.title || !post.body || post.tags.length <= 0)
      Swal.fire("Error!", "Please complete the form!", "error");
    else {
      setBtnLabel(<Loader />);
      updatePost(postid!, post, navigate);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="body max-w-[640px]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Edit Post</p>
          <div className="flex items-center gap-3">
            <a href="/draft" className="no-underline">
              Draft
            </a>
            <span className="bg-primary800 text-white py-1 px-2 text-xs rounded-[4px]">
              12
            </span>
          </div>
        </div>
        <div className="mt-6">
          <CreatePostCard />
        </div>
        <div className="flex p-4 justify-end gap-2">
          <button className="button secondary-button fit">Save as Draft</button>
          <button className="button primary-button fit" onClick={handleUpdate}>
            {btnLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
