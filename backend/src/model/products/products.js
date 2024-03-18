import mongoose from "mongoose";
const productsSchema = new mongoose.Schema(
  {
    productName: { type: String, required: [true, "product name is required"] },
    price: { type: Number, required: [true, "amount is required"] },
    desc: { type: String },
    percentDiscount: { type: Number },
    discountPrice: { type: Number },
    imageUrl: { type: String },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);

export default Products;
