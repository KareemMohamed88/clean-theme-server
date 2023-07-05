const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    cardImage: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    livePreviewLink: {
      type: String,
      required: true,
    },
    getSourceCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductModal = mongoose.model("products", ProductSchema);

module.exports = ProductModal;
