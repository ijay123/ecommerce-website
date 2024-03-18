import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productName: { type: String },
    price: { type: Number },
    desc: { type: String },
    quantity: { type: Number, default: 1 },
    total: { type: Number }, 
    imageUrl: { type: String },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
