import React, { useRef } from "react";
import { useState } from "react";
import { Quill } from "react-quill-new";

const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async() =>{

  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : "assets/upload_area.png"}
            alt=""
            className="aspect-video rounded cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
        />

        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <button type="button" className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black px-4 py-1.5 rounded hover:underline cursor-pointer" onClick={generateContent}>
            Generate with AI
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlog;
