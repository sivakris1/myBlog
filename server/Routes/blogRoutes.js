import express from 'express'
import { addBlog, addComment, deleteBlog, fetchAllBlogs, fetchBlog, getBlogComments, togglePublish } from '../controllers/blogController.js';

import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const BlogRoute = express.Router();

BlogRoute.post('/addblog',upload.single('image'),auth,addBlog);
BlogRoute.get('/all',fetchAllBlogs )
BlogRoute.get('/:blogId',fetchBlog)
BlogRoute.post('/delete',auth,deleteBlog)
BlogRoute.post('/toggle-publish',auth,togglePublish);
BlogRoute.post('/addcomment',addComment)
BlogRoute.post('/comments',getBlogComments)

export default BlogRoute;