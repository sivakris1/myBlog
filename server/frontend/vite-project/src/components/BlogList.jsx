import React, { useState } from 'react';
import { blogCategories , blog_data} from '../assets/assets';
import BlogCard from './BlogCard';


const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative flex-wrap">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            {menu === item && (
              <div className="absolute inset-0 bg-blue-600 rounded-full -z-10"></div>
            )}
            <button
              onClick={() => setMenu(item)}
              className={`px-4 py-2 rounded-full font-medium transition duration-200 cursor-pointer ${
                menu === item ? 'text-white' : 'text-gray-700'
              }`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:scroll-m-40'>
        {blog_data.filter((blog)=> menu === 'All' ? true : blog.category === menu).map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  );
};

export default BlogList;
