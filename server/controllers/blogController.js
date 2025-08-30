import ImageKit from "imagekit";
import Blog from "../model/Blog.js";

// imagekit instance
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    if (!title || !subTitle || !description || !category ) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    // upload image buffer directly to imagekit
    const response = await imagekit.upload({
      file: imageFile.buffer, // use buffer instead of fs.readFileSync
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // optimization via imagekit url
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
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
