import express from 'express'
import { addBlog } from '../controllers/blogController.js';

import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';

const BlogRoute = express.Router();

BlogRoute.post('/addblog',upload.single('image'),auth,addBlog);

export default BlogRoute;