import fs from "fs";
import path from "path";
import imagekit from "../config/imageKit.js";  // ✅ use instance
import Blog from "../model/Blog.js";
import { error } from "console";
import comment from "../model/Comment.js";

export const addBlog = async (req, res) => {
    try {
        // Access fields directly from req.body
        const { title, subTitle, description, category, isPublished } = req.body;

        // The uploaded file is in req.file, not req.body.image
        const image = req.file;

        if (!title || !subTitle || !description || !category) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // Check if the image file exists in req.file
        if (!image) {
            return res.json({ success: false, message: "No image uploaded" });
        }

        // You're already doing this correctly
        const fileBuffer = req.file.buffer;

        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: req.file.originalname,
            folder: "/blogs"
        });

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [{ quality: "auto" }, { format: "webp" }, { width: "1280" }],
        });

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image: optimizedImageUrl,
            isPublished,
        });

        return res.json({ success: true, message: "Blog added successfully" });
    } catch (error) {
        return res.json({ success: false, error: error.message });
    }
};

export const fetchAllBlogs = async(req,res) => {
  try {
    const blogs = await Blog.find({isPublished : true});

    return res.json({success:true,blogs})
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export const fetchBlog = async(req,res) =>{
  try {
    const {blogId} = req.params;

    const blog = await Blog.findById(blogId);

    return res.json({success:true,blog})
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export const deleteBlog = async(req,res) =>{
  try {
    const {blogId} = req.body;
    const blog = await Blog.findByIdAndDelete(blogId);

    return res.json({success:true,message:"Blog deleted successfully"})
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export const togglePublish = async(req,res) =>{
  try {
    const {id} = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;

    await blog.save();
    return res.json({success:true,message:"blog status updated successfully"})
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export const addComment = async(req,res) => {
  try {
    const {blog,name,content} = req.body;
    await comment.create({blog,name,content});

    return res.json({success:true,message:"comment added for the review"});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export const getBlogComments = async(req,res) =>{
  try {
    const {blogId} = req.body;
    const comments = await comment.findOne({blog : blogId, isApproved : true}).sort({createdAt : -1});

    return res.json({success:true,comments});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}