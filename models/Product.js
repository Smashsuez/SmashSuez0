import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    qauntity:{
      type: Number,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, },
          price: { type: Number, },
        },
      ],
    },
    sizesOption: {
      type: [
        {
          text: { type: String, },
          price: { type: Number, },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);