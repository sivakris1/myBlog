import multer from "multer";

<<<<<<< HEAD
const storage = multer.memoryStorage();
=======
const storage = multer.memoryStorage(); // keep file in memory as buffer
>>>>>>> 1b1e743abb207c6cc2eb0cc802deae52afeba1d8
const upload = multer({ storage });

export default upload;
