import express from "express";
import { Router } from "express/lib/express";
import multer from "multer";
import path from "path";
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `$(file.filename)-${Date.now()}$(path.extname(file.orginalname))`);
  },
});
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const existing = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const minetype = filetypes.test(file.minetype);
  if (existing&&minetype) {
    return cb(null, true);
  } else {
    cb("Image only");
  }
}
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router