const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const productRoute = require('./routes/product.route')
const app = express()
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ZrYclDLLP0zEGLiK
// anushka3002

//middleware
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'images', 
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], 
    },
});

const upload = multer({ storage: storage });

app.use("/api/products", productRoute)

app.post('/upload', upload.array('images', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ success: false, message: 'No files uploaded.' });
    }
    const imageUrls = req.files.map(file => file.path);
    res.status(200).json({
        success: true,
        urls: imageUrls,
    });
});

app.get('/', (req, res) => {
    res.send('Hello from node API server et')
})

mongoose.connect("mongodb+srv://anushkalyf:anushka3002@cluster0.64qtf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('Connected to database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
}).catch(() => {
    console.log('wrong')
})