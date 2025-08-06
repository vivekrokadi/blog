import React from 'react';
import appwriteService from '../appwrite/storage';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? appwriteService.getFileView(featuredImage) 
    : "/placeholder.png"; 

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[350px] rounded-xl p-4 bg-gray-100">
        <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
