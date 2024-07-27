require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const cloudinaryConfig = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_APIKEY,
      api_secret: process.env.CLOUDINARY_APISECRET,
    });
  } catch (error) {
    console.log("Error while connecting cloudinary");
    console.log(error);
  }
};

module.exports = cloudinaryConfig;
