const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const timestamp = Math.round(new Date().getTime() / 1000);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    timestamp: timestamp // ¡Asegúrate de tener una coma aquí!
});

const storage = new CloudinaryStorage({ cloudinary });

module.exports = multer({ storage });
