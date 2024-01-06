import multer from "multer";
import path from 'path';

//image uploads
const imageStorage = multer.diskStorage({
  destination: 'image',
  filename: (req, file, cb) => {
    cb(null, file.fieldname +'_' + Date.now() + path.extname(file.originalname));
  }
});
export const imageUploads = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000 * 1000
  }
});
const pdfStorage = multer.diskStorage({
  destination: 'pdf',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});
export const pdfUploads = multer({
  storage: pdfStorage,
  limits: {
    fileSize: 10000000 * 1000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb(new Error('Please upload a Post'))
    }
    cb(undefined, true)
  }
});