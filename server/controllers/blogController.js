import fs from 'fs'
import ImageKit from 'imagekit';
import path from 'path';
import Blog from '../model/Blog';


export const addBlog = async(req,res) => {
    try {
        const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if(!title || !subTitle || !description || !category || !imageFile){
            return res.json({success:false,message:"missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        //uploading image to imagekit
        const response = await ImageKit.upload({
            file: fileBuffer,
            fileName : imageFile.originalname,
            folder : '/blogs'
        })

        //optimization through imagekit URL transformation
        const optimizedImageUrl = ImageKit.url({
            path: response.filePath,
            transformation : [
                {quality : 'auto'},
                {format : 'webp'},
                {width : '1280'} 
            ]
        })

        await Blog.create({title,subTitle,description,category,image,isPublished})

        return res.json({success:"true",message:"Blog added successfully"})
    } catch (error) {
        
    }
}