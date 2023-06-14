import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    quantity: {
      type: Array,
      required: true,
    },
    extra: {
      type: Array,
      required: true,
    },
    title: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.order || mongoose.model("order", OrderSchema);
