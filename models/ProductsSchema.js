const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    cardImage: {
      type: String,
    },
    title: {
      type: String,
      minLength: [3, "product title to short"],
      maxLength: [32, "product title to long"],
    },
    price: {
      type: String,
      minLength: [1, "product price to short"],
      maxLength: [6, "product price to long"],
    },
    summary: {
      type: String,
      minLength: [200, "product price to short"],
      maxLength: [20, "product price to long"],
    },
    sold:{
      type: [String],
      default: 0 
    },
    tags: {
      type: String,
    },
    livePreviewLink: {
      type: String,
    },
    getSourceCode: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductModal = mongoose.model("products", ProductSchema);

module.exports = ProductModal;
