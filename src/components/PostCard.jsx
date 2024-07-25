import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link
      to={`/post/${$id}`}
      className="block w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg"
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold leading-tight mb-2">{title}</h2>
        {/* Optional: Add additional content like author, date, etc. */}
      </div>
    </Link>
  );
}

export default PostCard;
