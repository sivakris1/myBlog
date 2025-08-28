import express from 'express'
import { addBlog } from '../controllers/blogController';

const BlogRoute = express.Router();

BlogRoute.post('/addblog',addBlog);