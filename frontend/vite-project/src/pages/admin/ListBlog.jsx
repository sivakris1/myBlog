import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const ListBlog = () => {
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async() =>{
    setBlogs(blog_data)
  }

  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div>
      <h1>All Blogs</h1>
      <div>
          <table className=' w-full text-gray-500'>
            <thead>
              <tr>
                <th scope='col' className=' px-2 py-4'># </th>
                <th scope='col' className=' px-2 py-4'>Blog Title </th>
                <th scope='col' className=' px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className=' px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className=' px-2 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog,index)=>{
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1} /> 
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ListBlog
