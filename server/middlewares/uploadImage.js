// File upload modules
const multer = require('multer');
const path = require('path');

// File upload middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Accepted files filter
const imageMimeFilter = ['image/jpeg', 'image/png', 'image/gif'];

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        cb(null, imageMimeFilter.includes(file.mimetype));
    }
});

module.exports = upload;
