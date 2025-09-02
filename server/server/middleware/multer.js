import multer from "multer";

const storage = multer.memoryStorage(); // keep file in memory as buffer
const upload = multer({ storage });

export default upload;
