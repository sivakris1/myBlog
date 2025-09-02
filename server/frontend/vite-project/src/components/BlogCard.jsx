import React from 'react';
import {useNavigate} from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
  return (
    <>
    <div
    onClick={()=>navigate(`/blog/:${blog._id}`)}
    className="w-full sm:w-[300px] cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
    
    >
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full mb-3">
          {blog.category}
        </span>

        {/* Blog Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {blog.title}
        </h3>

        {/* Blog Description */}
        <p className="text-gray-600 text-sm line-clamp-2">{blog.description}</p>
      </div>
    </div>
    </>
  );
};

export default BlogCard;
