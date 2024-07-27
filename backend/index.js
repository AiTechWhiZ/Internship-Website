const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const RegisterModel = require("./models/Register");
const ContactModel = require("./models/Contact");
const DBCModel = require("./models/DBC");
const ProductModel = require("./models/Product");
const TechBlogModel = require("./models/TechBlog");


const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dde8xccqs',
  api_key: '844172214323317',
  api_secret: 'EmQrp8urPaDucLDnC-tHXQlPExA'
});

// Storage configuration for products
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products',
    allowed_formats: ['jpg', 'png']
  }
});

const upload = multer({ storage: storage });

// Storage configuration for tech blogs
const blogStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'techblogs',
    allowed_formats: ['jpg', 'png']
  }
});

const blogUpload = multer({ storage: blogStorage });

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/techAsia", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection to MongoDB failed:", err));

// Routes

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("No record found");
      }
    })
    .catch((err) => res.json(err));
});

// Register route
app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((techAsia) => res.json(techAsia))
    .catch((err) => res.json(err));
});

// Contact us route
app.post("/contact", (req, res) => {
  ContactModel.create(req.body)
    .then((techAsia) => res.json(techAsia))
    .catch((err) => res.json(err));
});

// Digital Business Card route
app.post("/dbc", (req, res) => {
  DBCModel.create(req.body)
    .then((techAsia) => res.json(techAsia))
    .catch((err) => res.json(err));
});

// Upload product route
app.post("/upload-product", upload.single('image'), (req, res) => {
  const { title, description, descPageLink } = req.body;
  const image = req.file.path;
  
  const newProduct = new ProductModel({ title, description, image, descPageLink });

  newProduct.save()
    .then(product => res.status(201).json(product))
    .catch(err => res.status(500).json({ error: 'Product upload failed' }));
});


// Fetch all products route
app.get("/products", (req, res) => {
  ProductModel.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(500).json({ error: 'Failed to fetch products' }));
});

// Upload tech blog route
app.post("/upload-techblog", blogUpload.single('image'), (req, res) => {
  const { title, content, createdAt, descPageLink } = req.body;
  const image = req.file.path;

  const newTechBlog = new TechBlogModel({ title, content, image, createdAt, descPageLink });

  newTechBlog.save()
    .then(blog => res.status(201).json(blog))
    .catch(err => res.status(500).json({ error: 'Tech Blog upload failed' }));
});


// Fetch all tech blogs route
app.get("/techblogs", (req, res) => {
  TechBlogModel.find()
    .then(blogs => res.status(200).json(blogs))
    .catch(err => res.status(500).json({ error: 'Failed to fetch tech blogs' }));
});

// Fetch all contact messages route
app.get("/contacts", (req, res) => {
  ContactModel.find()
    .then(contacts => res.status(200).json(contacts))
    .catch(err => res.status(500).json({ error: 'Failed to fetch contacts' }));
});

// Fetch all digital business cards route
app.get("/dbcs", (req, res) => {
  DBCModel.find()
    .then(dbcs => res.status(200).json(dbcs))
    .catch(err => res.status(500).json({ error: 'Failed to fetch digital business cards' }));
});

// Server listening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
