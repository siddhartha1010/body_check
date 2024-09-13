
import multer from "multer";
import path from "path";
import fs from "fs";

// Create the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = path.join(__dirname, "../../public/img");

    // Ensure the directory exists, create it if it doesn't
    // fs.mkdirSync(dirPath, { recursive: true });

    cb(null, dirPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
