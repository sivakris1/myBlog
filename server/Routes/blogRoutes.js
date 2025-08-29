import express from 'express'
import { addBlog } from '../controllers/blogController';
import upload from '../../middleware/multer';
import auth from '../../middleware/auth';

const BlogRoute = express.Router();

BlogRoute.post('/addblog',upload.single('image'),auth,addBlog);

export default BlogRoute;