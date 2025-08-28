import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {
  const { id: rawId } = useParams();
  const id = rawId.replace(/^:/, '');
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name,setName] = useState('')
  const [content,setContent] = useState('')

  const fetchBlogData = () => {
    console.log("Looking for blog with id:", id);
    const blog = blog_data.find(item => item._id === id);
    console.log("Found blog:", blog);
    setData(blog);
  };

  const fetchComments = () => {
    setComments(comments_data);
  };

  const addComment = (e) => {
  e.preventDefault(); // ✅ Fully stop page reload/navigation
  console.log("Comment submitted:", { name, content });
};


  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  return data ? (
    <div>
      {/* Background Image */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
      <Navbar />

      {/* Blog Header */}
      <div className="text-center mt-20 text-gray-600 px-4">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 mx-auto max-w-2xl text-lg text-gray-500">
          {data.subTitle}
        </h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Siva Krishna
        </p>
      </div>

      {/* Blog Image */}
      <img src={data.image} alt="" className="max-w-3xl mx-auto rounded-xl" />

      {/* Blog Content + Comments inside same container */}
      <div className="max-w-3xl mx-auto px-4">
        {/* Blog Description */}
        <div className="mt-10 prose prose-lg prose-headings:font-semibold prose-img:rounded-xl prose-a:text-primary">
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>

        {/* Comments Section */}
        <div>
          <p className="mt-14 mb-10 text-lg font-semibold text-gray-800">
            Comments ({comments.length})
          </p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm ml-8">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* new comment section */}

        <div className=' max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add Comment</p>
          <form onSubmit={addComment} className=' flex flex-col items-start gap-4 max-w-lg'>
            <input onChange={ (e) =>{ setName(e.target.value)}} value={name} type="text" placeholder='Name' required className=' w-full p-2 border border-gray-500 rounded outline-none' />
            <textarea onChange={(e) =>{ setContent(e.target.value)}} value={content} placeholder='Comment' className='w-full p-2 border border-gray-500 rounded outline-none h-48' required></textarea>
<button
  type="submit"
  className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
>
  Submit
</button>
          </form>
        </div>
        {/* shared buttons */}
        <div className=' my-24 max-w-3xl mx-auto'>
          <p className=' font-semibold my-4'>Share this article on social media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.googleplus_icon} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <div><Loader/></div>
  );
};

export default Blog;
